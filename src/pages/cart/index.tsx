import { useRouter } from 'next/router';
import React from 'react';
import {
  Formik,
  Form,
  Field,
  FormikErrors,
} from 'formik';
import Button from '../../components/Button';
import { useCart } from '../../contexts/cartContext';
import { PageWrapper, Container, CartList, CartItem, Title, Back, CartMenu } from '../../styles/pages/Cart';
import { CustomInputComponent, CustomSelectComponent } from '../../components/CustomFormComponents';
import { countryList } from '../../utils/countries';
import ProductImage from '../../components/ProductImage';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface MyFormValues {
  name: string;
  email: string;
  address: string;
  postalCode: string;
  country: string;
  phone: string;
}

const Cart: React.FC = () => {
  const { cartProducts, total, updateShippingInformation } = useCart();
  const router = useRouter();
  const initialValues: MyFormValues = { name: '', email: '', address: '', postalCode: '', country: 'Portugal', phone: '' };

  const isSubmitDisabled = (errors: FormikErrors<MyFormValues>, values: MyFormValues) => {

    if (Object.keys(errors).length > 0 || cartProducts.length === 0) {
      return true;
    }

    const allFieldsFilled = Object.values(values).some(value => value === '');

    return allFieldsFilled;
  }

  return (
    <PageWrapper>

      <Navbar title="Barkyn T-Shirt Shop" />

      <Container>

        <CartMenu>
          <Back role="button" onClick={() => router.back()}>Back to list</Back>
          <Title>Cart</Title>
        </CartMenu>

        <CartList>
          {cartProducts.map(product => (
            <CartItem key={product.id}>
              <div className="info">
                <ProductImage image={product.image} color={product.color} size={100} />
                <div className="detail">
                  <p>{product.title}</p>
                  <p>Size: {product.size}</p>
                  <p>Quantity: {product.quantity}x</p>
                </div>
              </div>
              <div className="options">
                <p>€ {product.price * product.quantity}</p>
              </div>
            </CartItem>
          ))}
          {cartProducts.length === 0 && <CartItem><p>There are no products in your cart.</p></CartItem>}
        </CartList>
        <h2>Total: € {total}</h2>
        <h3>Shipping Details</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            actions.setSubmitting(false);
            updateShippingInformation(values);
            router.push('success');
          }}
          validate={(values: MyFormValues) => {
            const errors: FormikErrors<MyFormValues> = {};

            const phoneRegex = new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{7,}$/);

            if ((values.name.length < 2)) {
              errors.name = 'Invalid name';
            }
            if (phoneRegex.test(values.phone) === false) {
              errors.phone = 'Invalid phone. Format (+XXX XXXXXXXXX)'
            }
            return errors;
          }}
        >
          {({ errors, values }) => (
            <Form style={{ padding: '1rem 0 2rem 0' }}>
              <label htmlFor="name">Name</label>
              <Field required id="name" name="name" placeholder="Enter your name" component={CustomInputComponent} />

              <label htmlFor="email">Email</label>
              <Field required type="email" id="email" name="email" placeholder="Enter your email" component={CustomInputComponent} />

              <label htmlFor="address">Address</label>
              <Field required id="address" name="address" placeholder="Enter your address" component={CustomInputComponent} />

              <label htmlFor="postalCode">Postal Code</label>
              <Field required id="postalCode" name="postalCode" placeholder="Enter your postal Code" component={CustomInputComponent} />

              <label htmlFor="country">Country</label>
              <Field as="select" required id="country" name="country" placeholder="Enter your country" component={CustomSelectComponent}>
                {countryList.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </Field>

              <label htmlFor="phone">Phone</label>
              <Field required type="tel" id="phone" name="phone" placeholder="Enter your phone number (International +XXX XXX XXX XXX)" component={CustomInputComponent} />
              <Button type="submit" disabled={isSubmitDisabled(errors, values)}>Complete Purchase</Button>
            </Form>
          )}
        </Formik>
      </Container>
      <Footer />
    </PageWrapper>
  );
};

export default Cart;
