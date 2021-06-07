import React from 'react';
import ProductImage from '../../components/ProductImage';
import { useCart } from '../../contexts/cartContext';
import { Container, ReceiptBox, Title, SubTitle, OrderWrapper, OrderTitle, List, Product, Total, Text } from '../../styles/pages/Success';

const SuccessPage: React.FC = () => {

  const { cartProducts, total, shipping } = useCart();

  if (!shipping) {
    return null;
  }

  return (
    <Container>
      <ReceiptBox>
        <Title>Thank you for your purchase!</Title>
        <SubTitle>Your order: </SubTitle>

        <OrderWrapper>
          <div>
            <OrderTitle>Products</OrderTitle>
            <List>
              {cartProducts.map(product => (
                <Product key={product.id}>
                  <div className="info">
                    <ProductImage image={product.image} color={product.color} size={60} />
                    <div className="detail">
                      <p>{product.title}</p>
                      <p>Size: {product.size}</p>
                      <p>Qty: {product.quantity}x</p>
                    </div>
                  </div>
                  <div className="options">
                    <p>€ {product.price * product.quantity}</p>
                  </div>
                </Product>
              ))}
            </List>
          </div>
          <div>
            <OrderTitle>Shipping information</OrderTitle>
            <p>Name: {shipping.name}</p>
            <p>Email: {shipping.email}</p>
            <p>Address: {shipping.address}</p>
            <p>Postal Code: {shipping.postalCode}</p>
            <p>Country: {shipping.country}</p>
            <p>Phone: {shipping.phone}</p>
          </div>


        </OrderWrapper>

        <Text>You paid: </Text>
        <Total>€ {total}</Total>
      </ReceiptBox>
    </Container>
  );
};

export default SuccessPage;