import React from 'react';
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../modules/styled';
import { CartProvider } from '../contexts/cartContext';
import { theme } from '../styles/theme';

const AppProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        {children}
      </CartProvider>
    </ThemeProvider>
  )
}

const renderTestComponent = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AppProviders, ...options });

export { renderTestComponent, userEvent }
export * from '@testing-library/react';
