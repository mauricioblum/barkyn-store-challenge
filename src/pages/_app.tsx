import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '../modules/styled';
import { CartProvider } from '../contexts/cartContext';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
