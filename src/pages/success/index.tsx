import React from 'react';
import { useCart } from '../../contexts/cartContext';

const SuccessPage: React.FC = () => {

  const { cartProducts, total, shipping } = useCart();

  if (!shipping) {
    return null;
  }

  return (
    <>
      <h1>Thank you for your purchase!</h1>
      <p>{shipping.name}</p>
      <p>{shipping.email}</p>
      <p>{shipping.address}</p>
      <p>{shipping.postalCode}</p>
      <p>{shipping.country}</p>
      <p>{shipping.phone}</p>

      <h3>{total}</h3>
    </>
  );
};

export default SuccessPage;