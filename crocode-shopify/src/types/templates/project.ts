import { TImage } from ".."

export type TBrief = {
  description: string
  industry: string
  technologies: string[]
  website: string
}

export type TSolution = {
  solutionText: string;
  projectScreenshot: TImage
}

export type TProjectCard = {
  _id: string;
  language: string;
  title: string;
  workDone: string;
  slug: { current: string };
  cardImage: TImage
}

export type TProject = {
  _id: string;
  language: string;
  title: string;
  workDone: string;
  slug: { current: string };
  coverImage: TImage
  brief: TBrief
  gallery: {galleryImages: TImage[]}
  solution: TSolution
}