import React from 'react';
import styled from '../../modules/styled';

export const FooterContainer = styled.footer`
    width: 100%;
    justify-self: flex-end;
    text-align: center;
    padding: 1.5rem 0;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <a
        href="https://www.barkyn.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          Barkyn
          </span>
      </a>
    </FooterContainer>
  );
}

export default Footer;
