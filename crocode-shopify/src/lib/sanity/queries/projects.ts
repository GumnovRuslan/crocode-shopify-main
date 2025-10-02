export const getProjects = (lang: string = 'en') => `
  query {
  allProjects(where: { language: { eq: "${lang}" } }) {
  	_id
    title
    language
    slug {current}
    coverImage {
      image {
        asset {
          url
        }
      }
      altText
    }
  }
}
`;

export const getArticleSeo = (slug: string) => `
  query {
    allBlogs(where: { 
    slug: { current: { eq: "${slug}" } } 
    }) {
    seo {
      title
      description
      keywords
      ogType
      twitterCard
      image {
        image {
          asset { url }
        }
        altText
      }
    }
  }
}
`

export const getProject = (slug: string) => `
  query {
    allProjects(where: { slug: { current: { eq: "${slug}" } } }) {
    _id
    title
    language
    slug {current}
    coverImage {
      image {
        asset {
          url
        }
      }
      altText
    }
  }
}
`;