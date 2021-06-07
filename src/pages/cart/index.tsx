import Image from 'next/image';
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
import { PageWrapper, CartList, CartItem } from '../../styles/pages/Cart';
import { CustomInputComponent, CustomSelectComponent } from '../../components/CustomFormComponents';
import { countryList } from '../../utils/countries';

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
  const initialValues: MyFormValues = { name: '', email: '', address: '', postalCode: '', country: '', phone: '' };

  const isSubmitDisabled = (errors: FormikErrors<MyFormValues>, values: MyFormValues) => {

    if (Object.keys(errors).length > 0 || cartProducts.length === 0) {
      return true;
    }

    const allFieldsFilled = Object.values(values).some(value => value === '');

    return allFieldsFilled;
  }

  return (
    <PageWrapper>
      <h1>Cart</h1>
      <CartList>
        {cartProducts.map(product => (
          <CartItem key={product.id}>
            <div className="info">
              <Image src={product.image} width="50" height="50" />
              <div className="detail">
                <p>{product.title}</p>
                <p>{product.color}</p>
                <p>{product.size}</p>
                <p>{product.quantity}x</p>
              </div>
            </div>
            <div className="options">
              <p>€ {product.price * product.quantity}</p>
            </div>
          </CartItem>
        ))}
        {cartProducts.length === 0 && <p>No products in cart.</p>}
        <h2>Total: € {total}</h2>
        <h3>Shipping Details</h3>
      </CartList>
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
          <Form>
            <label htmlFor="name">Name</label>
            <Field required id="name" name="name" placeholder="Enter your name" component={CustomInputComponent} />

            <label htmlFor="email">Email</label>
            <Field required type="email" id="email" name="email" placeholder="Enter your email" component={CustomInputComponent} />

            <label htmlFor="address">Address</label>
            <Field required id="address" name="address" placeholder="Enter your address" component={CustomInputComponent} />

            <label htmlFor="postalCode">Postal Code</label>
            <Field  required id="postalCode" name="postalCode" placeholder="Enter your postal Code" component={CustomInputComponent} />

            <label htmlFor="country">Country</label>
            <Field as="select" required id="country" name="country" placeholder="Enter your country" component={CustomSelectComponent}>
              {countryList.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </Field>

            <label htmlFor="phone">Phone</label>
            <Field required type="tel" pattern="+[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{3}" id="phone" name="phone" placeholder="Enter your phone number (International +XXX XXX XXX XXX)" component={CustomInputComponent} />
            <Button type="submit" disabled={isSubmitDisabled(errors, values)}>Complete Purchase</Button>
          </Form>
        )}
      </Formik>
    </PageWrapper>
  );
};

export default Cart;
