import React, { createContext, useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/router'

import { Product } from '../pages/api/products';

export interface CartProduct extends Omit<Product, 'colors' | 'sizes'> {
  size: string;
  color: string;
  quantity: number;
}

interface CartContextData {
  cartProducts: CartProduct[];
  total: string;
  addProduct: (productToAdd: CartProduct) => void;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {

  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const router = useRouter();

  const updateQuantity = (id: number, newQuantity: number) => {
    const productIndex = cartProducts.findIndex((product) => product.id === id);

    const newCart = [...cartProducts];

    newCart[productIndex].quantity = newQuantity;

    setCartProducts(newCart);
  }

  const addProduct = async (productToAdd: CartProduct) => {
    const productExists = cartProducts.find((product) => product.id === productToAdd.id);

    const currentQuantity = productExists ? productExists.quantity : 0;

    const newQuantity = currentQuantity + 1;

    if (productExists) {
      updateQuantity(productToAdd.id, newQuantity);
    } else {

      setCartProducts([...cartProducts, productToAdd]);
      // router.push('/cart');
    }
  };

  const removeProduct = async (productId: number) => {
    const productIndex = cartProducts.findIndex((product) => product.id === productId);

    if (productIndex >= 0) {
      const newCart = [...cartProducts];

      newCart.splice(productIndex, 1);

      setCartProducts(newCart);
    }
  };

  const total = useMemo(() => {
    const newTotal = cartProducts.reduce((acumulator, product) => {
      return acumulator + Number(product.price) * product.quantity;
    }, 0);

    return String(newTotal);
  }, [cartProducts]);


  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProduct,
        updateQuantity,
        removeProduct,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(){
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Use Cart must be wrapped in a CartProvider');
  }

  return context;
}