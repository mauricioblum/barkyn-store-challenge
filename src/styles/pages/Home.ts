import styled from "../../modules/styled";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

      @media (max-width: 410px) {
        button {
          padding: 0.5rem;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 410px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 0.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 410px) {
    font-size: 1rem;
  }
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

export const LoadingProduct = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-style: inset;
  min-height: 310px;
`;
