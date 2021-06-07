import React, { useState } from 'react';
import { Product } from '../../pages/api/products';
import Button from '../Button';

import { Color, Container, ProductInfo, Row, Size } from './styles';
import ProductImage from '../ProductImage';

export interface ProductItemProps {
  product: Product;
  selectedProduct?: Product;
  onSelectProduct: (product: Product) => void;
  onClickAddToCart: () => void;
  addToCartDisabled: boolean;
  selectedColor: string;
  onSelectColor: (color: string) => void;
  onSelectSize: (size: string) => void;
  selectedSize: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  selectedProduct,
  selectedColor,
  selectedSize,
  onSelectProduct,
  onClickAddToCart,
  addToCartDisabled,
  onSelectColor,
  onSelectSize,
}) => {

  const [shirtColor, setShirtColor] = useState('black');

  const handleSelectColor = (color: string) => {
    setShirtColor(color);
    onSelectColor(color);
  }

  return (
    <Container aria-label="product">
      <ProductInfo onClick={() => onSelectProduct(product)}>
        <ProductImage image={product.image} color={shirtColor} />
        <p>{product.title}</p>
        <span>€ {product.price}</span>
      </ProductInfo>

      {selectedProduct?.id === product.id && (
        <div className="productOptions">
          <Row>
            {product.colors.map(color => (
              <Color key={color} isSelected={color === selectedColor} colorTint={color} onClick={() => handleSelectColor(color)}>{color === selectedColor && '✓'}</Color>
            ))}
          </Row>

          <Row>
            {product.sizes.map(size => (
              <Size key={size} isSelected={size === selectedSize} onClick={() => onSelectSize(size)}>{size}</Size>
            ))}
          </Row>

          <Button className="addToCart" disabled={addToCartDisabled} onClick={onClickAddToCart}>Add to Cart</Button>
        </div>
      )}
    </Container>
  );
}

export default ProductItem;
