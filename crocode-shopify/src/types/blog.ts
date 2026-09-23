import type { PortableTextBlock } from "@portabletext/react";

export type BlogLinkMark = {
  _type: "link";
  _key: string;
  href: string;
};

export type BlogTextColorMark = {
  _type: "textColor";
  _key: string;
  hex: string;
};

export type BlogTextBlock = PortableTextBlock<BlogLinkMark | BlogTextColorMark>;

export type BlogBodyImage = {
  _type: "image";
  _key: string;
  alt: string;
  asset: {
    _id: string;
    url: string;
    metadata: {
      dimensions: {
        _type?: string;
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
  };
};

export type BlogArticleCardData = {
  _id: string;
  title: string;
  slug: { _type?: "slug"; current: string };
  language: string;
  author: string;
  articleDate: string;
  seo: { _type?: string; title: string; description: string };
  image: BlogBodyImage | null;
};

export type BlogArticle = Omit<BlogArticleCardData, "image"> & {
  body: (BlogTextBlock | BlogBodyImage)[];
};
