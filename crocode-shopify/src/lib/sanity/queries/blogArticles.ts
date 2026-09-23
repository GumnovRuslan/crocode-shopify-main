const articleFields = /* groq */ `
  _id, title, slug {current}, language, author, articleDate,
  seo {title, description}
`;

const imageFields = /* groq */ `
  _key, _type, alt,
  asset->{_id, url, metadata {dimensions {width, height, aspectRatio}}}
`;

const publishedArticles = /* groq */ `
  _type == "blogArticle" && language == $lang &&
  !(_id in path("drafts.**")) && defined(slug.current)
`;

export const getBlogArticles = () => /* groq */ `
  *[${publishedArticles}] | order(articleDate desc, slug.current asc) {
    ${articleFields},
    "image": body[_type == "image"][0] {${imageFields}}
  }
`;

export const getBlogArticleBySlug = () => /* groq */ `
  *[${publishedArticles} && slug.current == $slug][0] {
    ${articleFields},
    body[] {
      ...,
      _type == "image" => {${imageFields}}
    }
  }
`;
