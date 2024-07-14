import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../service/productsApi';

type CartContextType = {
  items: Product[];
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;
  AddToCart: (product: Product) => void;
  RemoveFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<Product[]>([]);

  const AddToCart = (product: Product) => {
    setItems((prevItems) => [...prevItems, product]);
  };

  const RemoveFromCart = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ items, setItems, AddToCart, RemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('Context must be used within a provider');
  }
  return context;
};
