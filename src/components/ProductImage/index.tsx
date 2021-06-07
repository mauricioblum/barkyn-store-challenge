import React from 'react';
import styled from '../../modules/styled';

export const ImageWrapper = styled.div`
  position: relative;
  .stamp{
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -38%);
    filter: blur(0.5px);
  }
`;

interface ProductImageProps {
  imageURL: string;
  color: string;
  size?: number;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageURL, color, size = 200 }) => {

  const getTShirtColor = () => {

    switch(color){
      case 'red': {
        return 'invert(20%) sepia(100%) saturate(6780%) hue-rotate(356deg) brightness(98%) contrast(116%)'
      }
      case 'green': {
        return 'invert(43%) sepia(92%) saturate(690%) hue-rotate(78deg) brightness(93%) contrast(89%)';
      }
      case 'black': {
        return '';
      }
      case 'blue': {
        return 'invert(10%) sepia(71%) saturate(3905%) hue-rotate(234deg) brightness(125%) contrast(143%)';
      }
      case 'white': {
        return 'invert(100%) sepia(100%) saturate(50%) hue-rotate(218deg) brightness(105%) contrast(103%)';
      }
      case 'purple': {
        return 'invert(16%) sepia(84%) saturate(2164%) hue-rotate(287deg) brightness(81%) contrast(113%)';
      }
    }    
  }

  return (
    <ImageWrapper>
      <img className="tshirt" src="/tshirt.png" alt="Shirt" width={size} height={size - 3} style={{ filter: getTShirtColor()}} />
      <img className="stamp" src={imageURL} alt="Stamp" width={(size / 4) + 10} height={(size / 4) + 10} />
    </ImageWrapper>
  );
}

export default ProductImage;
