import React, { createContext, useContext, useState } from 'react';
import { Product } from '../service/productsApi';

type CartContextType = {
  items: Product[];
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;
  AddToCart: (product: Product) => void;
  RemovefromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<Product[]>([]);
  const AddtoCart = (product: Product) => {
    setItems((preItems) => [...preItems, product]);
  };
  const RemovefromCart = (productId: number) => {
    setItems((preItems) => preItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ items, setItems, AddtoCart, RemovefromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('Context must be used withing a provider');
  }
  return context;
};
