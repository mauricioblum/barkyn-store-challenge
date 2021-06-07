import styled from "../../modules/styled";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

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

  footer {
    width: 100%;
    justify-self: flex-end;
    text-align: center;
    padding: 1.5rem 0;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
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
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
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
