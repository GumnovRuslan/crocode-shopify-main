export type TServiceCategory = {
  _id: string;
  categoryName: string;
  slug: { current: string };
  description?: string;
  categoryImage?: {
    image: { asset: { url: string } };
    altText: string;
  };
  order?: number;
}

export type TServiceCard = {
  _id: string;
  title: string;
  slug: { current: string };
  category: {
    _id: string;
    categoryName: string;
  };
  order?: number;
}

export type TServiceOffer = {
  title: string;
  text: string;
}

export type TService = {
  _id: string;
  language: string;
  title: string;
  slug: { current: string };
  heroSubtitle?: string;
  heroImage?: {
    image: { asset: { url: string } };
    altText: string;
  };
  category: {
    _id: string;
    categoryName: string;
    slug: { current: string };
  };
  descriptionTitle?: string;
  descriptionText: string;
  whyShopifyTitle?: string;
  whyShopifyText?: string;
  offers?: TServiceOffer[];
  detailsTitle?: string;
  detailsText?: string;
  includedTitle?: string;
  includedItems?: string[];
  videoTitle?: string;
  videoUrl?: string;
  seo?: any;
}

// Grouped services for dropdown
export type TServicesGrouped = {
  [categoryId: string]: {
    category: TServiceCategory;
    services: TServiceCard[];
  }
}

// Service category with its services for services page
export type TServiceCategoryWithServices = TServiceCategory & {
  services: TServiceCard[];
}
