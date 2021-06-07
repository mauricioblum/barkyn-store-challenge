import React, { createContext, useContext, useMemo, useState } from 'react';

import { Product } from '../pages/api/products';

export interface CartProduct extends Omit<Product, 'colors' | 'productSizes'> {
  size: string;
  color: string;
  quantity: number;
}

export interface ShippingInformation {
  name: string;
  email: string;
  address: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface CartContextData {
  cartProducts: CartProduct[];
  total: string;
  shipping?: ShippingInformation;
  addProduct: (productToAdd: CartProduct) => void;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  updateShippingInformation: (data: ShippingInformation) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {

  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [shipping, setShipping] = useState<ShippingInformation>();

  // const router = useRouter();

  const updateQuantity = (id: number, newQuantity: number) => {
    const productIndex = cartProducts.findIndex((product) => product.productId === id);

    const newCart = [...cartProducts];

    newCart[productIndex].quantity = newQuantity;

    setCartProducts(newCart);
  }

  const addProduct = async (productToAdd: CartProduct) => {
    const productExists = cartProducts.find((product) => product.productId === productToAdd.productId);

    const currentQuantity = productExists ? productExists.quantity : 0;

    const newQuantity = currentQuantity + 1;

    if (productExists) {
      updateQuantity(productToAdd.productId, newQuantity);
    } else {

      setCartProducts([...cartProducts, productToAdd]);
      // router.push('/cart');
    }
  };

  const removeProduct = async (productId: number) => {
    const productIndex = cartProducts.findIndex((product) => product.productId === productId);

    if (productIndex >= 0) {
      const newCart = [...cartProducts];

      newCart.splice(productIndex, 1);

      setCartProducts(newCart);
    }
  };

  const total = useMemo(() => {
    const newTotal = cartProducts.reduce((acumulator, product) => {
      return acumulator + product.price * product.quantity;
    }, 0);

    return String(newTotal);
  }, [cartProducts]);

  const updateShippingInformation = (data: ShippingInformation) => {
    setShipping(data);
  }


  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProduct,
        updateQuantity,
        removeProduct,
        total,
        shipping,
        updateShippingInformation,
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