import styled from "../../modules/styled";

export const Container = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:focus {
    transform: scale(1.02);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: scale(1.02);
  }

  div.productOptions {
    display: flex;
    flex-direction: column;
  }

  button.addToCart {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductInfo = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin-top: 0.5rem;
  }

  p,
  img {
    cursor: pointer;
  }
  span {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem 0;

  button {
    margin-left: 0.8rem;
    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Color = styled.button<{ colorTint: string; isSelected?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ colorTint }) => colorTint};
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  color: ${({ colorTint }) => colorTint !== 'white' ? 'white' : 'black'};
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Size = styled.button<{ isSelected?: boolean }>`
  width: 28px;
  height: 28px;
  background: black;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ isSelected, theme }) =>
    isSelected ? `2px solid ${theme.colors.primary}` : "1px solid black"};
  cursor: pointer;

  &:focus {
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.1);
  }
`;
