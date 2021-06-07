import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head'
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router'
import {
  Container,
  PageWrapper,
  SubTitle,
  ProductList,
  LoadingProduct,
} from '../styles/pages/Home';
import { Product } from './api/products';
import { fetchProducts } from '../services';
import { useCart, CartProduct } from '../contexts/cartContext';
import Button from '../components/Button';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { addProduct, total } = useCart();

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const productsResponse = await fetchProducts();

      if (productsResponse) {
        setProducts(productsResponse);
        console.log('products', productsResponse);
      }
      setLoading(false);
    }
    getProducts();
  }, []);

  const handleAddToCart = () => {

    if (selectedProduct) {

      const { id, image, price, title } = selectedProduct

      const productToCart: CartProduct = {
        id,
        image,
        title,
        price,
        color: selectedColor,
        size: selectedSize,
        quantity: 1,
      };

      console.log('The product to be added to cart: ', productToCart);
      addProduct(productToCart);
    }
  }

  const handleSelectProduct = (product: Product) => {
    setSelectedColor('');
    setSelectedSize('');
    setSelectedProduct(product);
  }

  const addToCartDisabled = useMemo(() => {
    if (selectedColor && selectedSize) {
      return false;
    }
    return true;
  }, [selectedColor, selectedSize]);

  const loadingContent = new Array<string>(6).fill('Loading...');

  return (
    <PageWrapper>
      <Navbar title="Barkyn T-Shirt Shop" />

      <Container>
        <Head>
          <title>Barkyn T-Shirt Shop</title>
          <meta name="description" content="Tshirt shop" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <section id="products">
            <div className="menu">
              <SubTitle>Products</SubTitle>
              <Button onClick={() => router.push('cart')}>Cart Total:  € {total}</Button>
            </div>


            <ProductList>
              {products.map(product => (
                <ProductItem
                  key={product.id}
                  product={product}
                  selectedProduct={selectedProduct}
                  onSelectProduct={handleSelectProduct}
                  selectedColor={selectedColor}
                  selectedSize={selectedSize}
                  onClickAddToCart={handleAddToCart}
                  addToCartDisabled={addToCartDisabled}
                  onSelectColor={(color) => setSelectedColor(color)}
                  onSelectSize={(size) => setSelectedSize(size)}
                />
              ))}
              {loading && loadingContent.map((content, index) => (
                <LoadingProduct key={index}>
                  <Skeleton circle={true} height={100} width={100} />
                  <Skeleton count={2} style={{ marginTop: 10 }} />
                </LoadingProduct>
              ))}
            </ProductList>

          </section>
        </main>

      </Container>
      <Footer />
    </PageWrapper>
  )
}
