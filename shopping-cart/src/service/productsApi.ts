import { URL } from './URL';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Product[] = await response.json();
  return data;
};
