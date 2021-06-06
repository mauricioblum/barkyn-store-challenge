import styled from "../../modules/styled";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  footer {
    width: 100%;
    justify-self: flex-end;
    text-align: center;
    padding: 1.5rem 0;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;

  section {
    div.menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled.h2`
  margin-top: 0.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProductList = styled.div`
  margin-top: 0.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 595px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductItem = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-style: inset;
  min-height: 310px;

  &:focus {
    border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }

  span {
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 2px;
  }
  &:last-child {
    margin-left: 0;
  }
`;

export const Color = styled.button<{ colorTint: string; isSelected?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ colorTint }) => colorTint};
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

export const AddToCartButton = styled.button`
  padding: 0.8rem 1rem;
  text-align: center;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin-top: 0.5rem;

  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;
