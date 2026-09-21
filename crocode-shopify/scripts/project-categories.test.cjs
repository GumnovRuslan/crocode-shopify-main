const assert = require('node:assert/strict');
const { test } = require('node:test');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const ts = require('typescript');
// Studio already depends on groq-js; no extra runtime dependency is needed.
const { parse, evaluate } = require('../../studio-shopify-crocode/node_modules/groq-js');

function loadTypeScript(path) {
  const source = readFileSync(resolve(__dirname, path), 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const exports = {};
  new Function('exports', compiled.outputText)(exports);
  return exports;
}

const { getProjects, getProjectsByServiceCategory, getProject, getProjectsSlug } = loadTypeScript('../src/lib/sanity/queries/projects.ts');
const { formatProjectWorkDone } = loadTypeScript('../src/utils/projectWorkDone.ts');
const ref = (id) => ({ _type: 'reference', _key: id, _ref: id });
const project = (_id, workDone, language = 'en') => ({ _id, _type: 'projects', title: _id, language, workDone, slug: { current: _id } });
const categories = [
  { _id: 'development', _type: 'serviceCategories', categoryName: 'Development renamed', language: 'en' },
  { _id: 'marketing', _type: 'serviceCategories', categoryName: 'Marketing Shopify', language: 'en' },
];
const dataset = [
  ...categories,
  ...Array.from({ length: 6 }, (_, i) => project(`project-${i}`, [ref('development')])),
  project('shared', [ref('development'), ref('marketing')]),
  project('legacy', 'Development renamed'),
  project('polish', [ref('development')], 'pl'),
  project('missing', null),
  project('empty', []),
  project('broken', [ref('deleted')]),
];
async function query(source, params, documents = dataset) {
  return (await evaluate(parse(source), { dataset: documents, params })).get();
}

test('sitemap projects preserve slug case and language with either Work Done format', async () => {
  const documents = [project('Inwohn', 'Legacy text'), project('new', [ref('development')]), project('polish', null, 'pl')];
  const { allProjects } = await query(getProjectsSlug(), { lang: 'en' }, documents);
  assert.deepEqual(allProjects, [{ slug: { current: 'Inwohn' } }, { slug: { current: 'new' } }]);
});

test('category filtering returns all matches, in stable order, excluding legacy text and another language', async () => {
  const { allProjects } = await query(getProjectsByServiceCategory(), { lang: 'en', categoryId: 'development' });
  assert.deepEqual(allProjects.map(p => p._id), [...Array.from({ length: 6 }, (_, i) => `project-${i}`), 'shared']);
});

test('multiple references include a project once in each category and survive a category rename', async () => {
  const { allProjects } = await query(getProjectsByServiceCategory(), { lang: 'en', categoryId: 'marketing' });
  assert.deepEqual(allProjects.map(p => p._id), ['shared']);
  assert.equal(formatProjectWorkDone(allProjects[0].workDone), 'Development renamed, Marketing Shopify');
});

test('missing or unmatched service category returns no general portfolio fallback', async () => {
  for (const categoryId of [null, '', 'unknown']) {
    const result = await query(getProjectsByServiceCategory(), { lang: 'en', categoryId });
    assert.deepEqual(result.allProjects, []);
  }
});

test('general portfolio preserves legacy labels and handles missing, empty and dangling references', async () => {
  const { allProjects } = await query(getProjects(), { lang: 'en' });
  assert.equal(allProjects.length, dataset.filter(p => p._type === 'projects' && p.language === 'en').length);
  assert.equal(formatProjectWorkDone(allProjects.find(p => p._id === 'legacy').workDone), 'Development renamed');
  for (const id of ['missing', 'empty', 'broken']) {
    assert.equal(formatProjectWorkDone(allProjects.find(p => p._id === id).workDone), '');
  }
});

test('detail query preserves Portable Text, images, SEO and literal slug parameters', async () => {
  const slug = 'Inwohn';
  const solution = [{ _type: 'block', _key: 'text', children: [{ _type: 'span', text: 'Solution' }] }];
  const image = { asset: ref('image-1') };
  const detail = { ...project(slug, [ref('development')]), solution, coverImage: { imageDesktop: image, imageMobile: image, altText: 'Cover' }, gallery: { imageDesktop: image }, seo: { title: 'SEO title', image: { image } } };
  const documents = [...categories, detail, { _id: 'image-1', url: 'https://example.com/image.webp' }];
  const { allProjects } = await query(getProject(), { slug }, documents);
  assert.deepEqual(allProjects[0].solutionRaw, solution);
  assert.equal(allProjects[0].coverImage.imageDesktop.asset.url, 'https://example.com/image.webp');
  assert.equal(allProjects[0].seo.image.image.asset.url, 'https://example.com/image.webp');
  assert.equal(allProjects[0].seo.title, 'SEO title');
  assert.deepEqual((await query(getProject(), { slug: '\" || true || \"' }, documents)).allProjects, []);
});

