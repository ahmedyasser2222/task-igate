export type ProductType = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  category: string;
  rating: number;
  tags: string[];
  brand?: string;
};

export type CategoryType = {
  slug: string;
  name: string;
  url: string;
};
