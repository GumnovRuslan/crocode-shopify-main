const workDoneFields = /* groq */ `
  "workDone": select(
    defined(count(workDone)) => (workDone[]->{_id, categoryName})[defined(_id)],
    coalesce(workDone, [])
  )
`;

const projectCardFields = /* groq */ `
  _id,
  language,
  title,
  ${workDoneFields},
  slug {current},
  category->{_id, categoryName},
  cardImage {
    image {asset->{url}},
    altText
  }
`;

// Parameters are passed separately to fetchGROQ, never interpolated from input.
export const getProjects = () => /* groq */ `
{
  "allProjects": *[_type == "projects" && language == $lang] | order(_id asc) {
    ${projectCardFields}
  }
}
`;

export const getProjectsByServiceCategory = () => /* groq */ `
{
  "allProjects": *[
    _type == "projects" && language == $lang &&
    defined($categoryId) && $categoryId in workDone[]._ref
  ] | order(_id asc) {
    ${projectCardFields}
  }
}
`;

export const getProjectsSlug = () => /* groq */ `
{
  "allProjects": *[_type == "projects" && language == $lang] | order(_id asc) {
    slug {current}
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
`;

export const getProject = () => /* groq */ `
{
  "allProjects": *[_type == "projects" && slug.current == $slug] {
    _id,
    title,
    client,
    ${workDoneFields},
    language,
    slug {current},
    theme,
    coverImage {
      imageDesktop {asset->{url}},
      imageMobile {asset->{url}},
      altText
    },
    brief {
      description,
      industry,
      technologies,
      website {
        text,
        url
      }
    },
    gallery {
      imageDesktop {asset->{url}},
      imageMobile {asset->{url}},
      altText
    },
    "solutionRaw": solution,
    seo {
      title,
      description,
      keywords,
      ogType,
      twitterCard,
      image {
        image {asset->{url}},
        altText
      }
    }
  }
}
`;
