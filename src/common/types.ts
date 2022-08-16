export type CategoryType = {
  categories: {
    title: string;
    items: {
      id: number;
      title: string;
      description: string;
      image_url: string;
    }[];
  }[];
  title: string;
};

export type Item = {
  id: number;
  title: string;
  category: string;
  description: string;
  image_url: string;
};
