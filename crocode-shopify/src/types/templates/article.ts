import { TImage } from "./image";
import { PortableTextBlock } from "@portabletext/react";

type TArticles = {
  _id: string;
  language: string;
  customer: string;
  title: string;
  gallery: {galleryImages: TImage[]};
  contentRaw: PortableTextBlock[];
}

export default TArticles