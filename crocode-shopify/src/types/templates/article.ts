import { TImage } from "..";
import { PortableTextBlock } from "@portabletext/react";

export type TArticles = {
  _id: string;
  language: string;
  customer: string;
  title: string;
  gallery: {galleryImages: TImage[]};
  contentRaw: PortableTextBlock[];
}