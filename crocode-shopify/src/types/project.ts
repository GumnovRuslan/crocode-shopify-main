export type TProject = {
  _id: string;
  language: string;
  title: string;
  slug: { current: string };
  coverImage: {
      image: {
        asset: {
          url: string;
        }
      }
      altText: string;
    }
}