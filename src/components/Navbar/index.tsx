import React from 'react';
import styled from '../../modules/styled';

export const NavbarContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 1rem;

  @media (max-width: 435px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  transition: 0.1s;

  @media (max-width: 435px) {
    font-size: 1.6rem;
  }
`;

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <NavbarContainer>
      <Title>{title}</Title>
    </NavbarContainer>
  );
}

export default Navbar;
