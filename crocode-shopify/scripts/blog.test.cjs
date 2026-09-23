const assert = require('node:assert/strict');
const {test} = require('node:test');
const {readFileSync} = require('node:fs');
const {resolve} = require('node:path');
const ts = require('typescript');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');

function loadTS(path, replacements = {}) {
  const compiled = ts.transpileModule(readFileSync(resolve(__dirname, path), 'utf8'), {
    compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true},
  });
  const module = {exports: {}};
  new Function('require', 'module', 'exports', compiled.outputText)(
    name => name in replacements ? replacements[name] : require(name), module, module.exports,
  );
  return module.exports;
}

const utils = loadTS('../src/utils/blog.ts');
const BlogBody = loadTS('../src/components/sections/blog-body/index.tsx', {
  '@/utils/blog': utils,
  '@/components/ui/Fade': {Fade: ({children}) => children},
  '@/components/ui/BlurIn': {BlurIn: ({children}) => children},
  './styles.module.scss': {},
  'next/image': props => React.createElement('img', props),
  'next/link': props => React.createElement('a', props),
}).default;
const block = (key, extra = {}) => ({_type: 'block', _key: key, style: 'normal', markDefs: [], children: [{_type: 'span', _key: 's', marks: [], text: key}], ...extra});

test('article calendar dates do not change in a western time zone', () => {
  const previous = process.env.TZ;
  process.env.TZ = 'America/Los_Angeles';
  try { assert.equal(utils.formatArticleDate('2026-09-23', 'en'), 'September 23, 2026'); }
  finally { if (previous === undefined) delete process.env.TZ; else process.env.TZ = previous; }
});

test('links distinguish internal destinations, anchors, contact links and external sites', () => {
  assert.deepEqual(utils.getBlogLink('https://shopifywebdevelopmentservices.com/our-work/newrock?ref=blog#work'), {href: '/our-work/newrock?ref=blog#work', external: false});
  assert.deepEqual(utils.getBlogLink('#migration'), {href: '#migration', external: false});
  assert.deepEqual(utils.getBlogLink('/services'), {href: '/services', external: false});
  assert.deepEqual(utils.getBlogLink('https://example.com/guide'), {href: 'https://example.com/guide', external: true});
  assert.deepEqual(utils.getBlogLink('mailto:welcome@crocode.io'), {href: 'mailto:welcome@crocode.io', external: false});
  for (const href of ['javascript:alert(1)', 'data:text/html,hi', '//example.com', 'java\nscript:alert(1)', '\\example.com', null, '']) {
    assert.equal(utils.getBlogLink(href), null);
  }
});

test('all heading levels and nested lists produce semantic HTML', () => {
  const body = [
    ...Array.from({length: 6}, (_, i) => block(`Heading ${i + 1}`, {style: `h${i + 1}`})),
    block('First', {listItem: 'number', level: 1}),
    block('Nested', {listItem: 'bullet', level: 2}),
    block('Second', {listItem: 'number', level: 1}),
  ];
  const html = renderToStaticMarkup(React.createElement(BlogBody, {body}));
  for (let i = 1; i <= 6; i++) assert.ok(html.includes(`<h${i}>Heading ${i}</h${i}>`));
  assert.ok(html.includes('<ol><li>First<ul><li>Nested</li></ul></li><li>Second</li></ol>'));
});

test('combined marks, external links and image position survive rendering without executing HTML', () => {
  const body = [block('before', {
    markDefs: [{_type: 'link', _key: 'link', href: 'https://example.com/'}, {_type: 'textColor', _key: 'color', hex: '#1155CC'}],
    children: [{_type: 'span', _key: 'span', text: '<script>alert(1)</script>', marks: ['strong', 'em', 'underline', 'link', 'color']}],
  }), {
    _type: 'image', _key: 'image', alt: 'Store screenshot',
    asset: {_id: 'image-id', url: 'https://cdn.sanity.io/image.png', metadata: {dimensions: {width: 2048, height: 980, aspectRatio: 2048 / 980}}},
  }, block('After the image')];
  const html = renderToStaticMarkup(React.createElement(BlogBody, {body}));
  for (const fragment of ['<strong>', '<em>', 'color:#1155CC', 'target="_blank"', 'rel="noopener noreferrer"', 'alt="Store screenshot"', 'width="2048"', 'height="980"']) assert.ok(html.includes(fragment), fragment);
  assert.ok(!html.includes('<script>'));
  assert.ok(html.indexOf('<figure>') < html.indexOf('After the image'));
});

test('invalid links and colors render text without unsafe attributes', () => {
  const body = [block('unsafe', {
    markDefs: [{_type: 'link', _key: 'link', href: 'javascript:alert(1)'}, {_type: 'textColor', _key: 'color', hex: 'red; background:url(https://example.com)'}],
    children: [{_type: 'span', _key: 'span', text: 'Safe text', marks: ['link', 'color']}],
  })];
  const html = renderToStaticMarkup(React.createElement(BlogBody, {body}));
  assert.ok(html.includes('Safe text'));
  assert.ok(!html.includes('href='));
  assert.ok(!html.includes('style='));
});
