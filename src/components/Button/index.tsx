import React from 'react';
import styled from '../../modules/styled';

export const StyledButton = styled.button`
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
    background: ${({ theme }) => theme.colors.disabled};
  }
`;

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode; 
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <StyledButton ref={ref} {...props} />
);

Button.displayName = 'Button';

export default Button;