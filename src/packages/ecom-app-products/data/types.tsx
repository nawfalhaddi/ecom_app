export type Categories = string[];
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export type CategoriesWithProducts = {
  category: string;
  products: Product[];
}[];
