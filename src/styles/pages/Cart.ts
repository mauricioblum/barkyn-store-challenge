import styled from "../../modules/styled";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;

    input, select {
      margin-bottom: 0.5rem;
    }

    > button {
      display: block;
    }
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    text-align: center;
  }

  footer {
    width: 100%;
    justify-self: flex-end;
    text-align: center;
    padding: 1.5rem 0;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 435px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  @media (max-width: 435px) {
    font-size: 1.8rem;
  }
`;

export const Back = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const CartMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CartList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  width: 100%;

  li {
    margin-bottom: 0.5rem;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CartItem = styled.li`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div.info,
  div.options {
    display: flex;
    align-items: center;

    div.detail {
      margin-left: 0.3rem;
      display: block;
    }
  }
`;
