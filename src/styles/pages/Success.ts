import styled from "../../modules/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
`;

export const ReceiptBox = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-height: 500px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  background: white;
  overflow: auto;

  @media (max-width: 710px) {
    min-height: 300px;
    width: 600px;
  }

  @media (max-width: 610px) {
    min-height: 200px;
    width: 500px;
  }
  @media (max-width: 510px) {
    min-height: 100px;
    width: 400px;
  }
  @media (max-width: 410px) {
    width: 340px;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4rem;
  align-self: center;
  text-align: center;

  @media (max-width: 610px) {
    margin-bottom: 1.5rem;
  }
  @media (max-width: 410px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const SubTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 410px) {
    font-size: 1rem;
  }
`;

export const OrderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    padding: 0.5rem;
  }

  @media (max-width: 610px) {
    flex-direction: column;
  }
`;

export const OrderTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.8rem;
  @media (max-width: 410px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 1rem;
  width: 100%;
  height: 250px;
  overflow-y: auto;

  li {
    margin-bottom: 0.5rem;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Product = styled.li`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
  }
  div.detail {
    margin-left: 0.3rem;
    display: block;
  }

  @media (max-width: 410px) {
    font-size: 0.8rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  align-self: center;
  margin-top: 2rem;
`;

export const Total = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  align-self: center;
`;
