// Get all service categories with their services for services page
export const getServiceCategoriesWithServices = (lang: string = 'en') => `
{
  "serviceCategories": *[_type == "serviceCategories" && language == "${lang}"] | order(order asc) {
    _id,
    categoryName,
    "slug": {"current": slug.current},
    description,
    categoryImage {
      "image": {"asset": {"url": image.asset->url}},
      altText
    },
    order,
    "services": *[_type == "services" && language == "${lang}" && references(^._id)] | order(order asc) {
      _id,
      title,
      "slug": {"current": slug.current},
      order
    }
  }
}
`;

// Get all services grouped by category for dropdown menu
export const getServicesForDropdown = (lang: string = 'en') => `
{
  "allServiceCategories": *[_type == "serviceCategories" && language == "${lang}"] | order(order asc) {
    _id,
    categoryName,
    "slug": {"current": slug.current},
    order
  },
  "allServices": *[_type == "services" && language == "${lang}"] | order(order asc) {
    _id,
    title,
    "slug": {"current": slug.current},
    category-> {
      _id,
      categoryName
    },
    order
  }
}
`;

// Get single service by slug
export const getServiceBySlug = (slug: string, lang: string = 'en') => `
{
  "allServices": *[_type == "services" && slug.current == "${slug}" && language == "${lang}"] {
    _id,
    language,
    title,
    "slug": {"current": slug.current},
    heroSubtitle,
    heroImage {
      "image": {"asset": {"url": image.asset->url}},
      altText
    },
    category-> {
      _id,
      categoryName,
      "slug": {"current": slug.current}
    },
    descriptionTitle,
    descriptionText,
    whyShopifyTitle,
    whyShopifyText,
    offers[] {
      title,
      text
    },
    detailsTitle,
    detailsText,
    includedTitle,
    includedItems,
    videoTitle,
    videoUrl,
    seo {
      title,
      description,
      keywords,
      ogType,
      image {
        "image": {"asset": {"url": image.asset->url}},
        altText
      }
    }
  }
}
`;

// Get all services (for sitemap, etc.)
export const getAllServices = (lang: string = 'en') => `
{
  "allServices": *[_type == "services" && language == "${lang}"] {
    _id,
    title,
    "slug": {"current": slug.current},
    language
  }
}
`;

// Get single service category by slug with its services
export const getServiceCategoryBySlug = (slug: string, lang: string = 'en') => `
{
  "serviceCategory": *[_type == "serviceCategories" && slug.current == "${slug}" && language == "${lang}"][0] {
    _id,
    categoryName,
    "slug": {"current": slug.current},
    description,
    categoryImage {
      "image": {"asset": {"url": image.asset->url}},
      altText
    },
    order,
    "services": *[_type == "services" && language == "${lang}" && references(^._id)] | order(order asc) {
      _id,
      title,
      "slug": {"current": slug.current},
      order
    }
  }
}
`;
