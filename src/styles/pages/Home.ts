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

export const LoadingProduct = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-style: inset;
  min-height: 310px;
`;