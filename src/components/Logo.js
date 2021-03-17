import styled from 'styled-components';

const LogoLink = styled.a`
  display: block;

  img {
    max-width: 10.25rem;
  }
`;

const Logo = ({ className }) => {
  return (
    <LogoLink className={className} href="/" title="Link para homepage do site">
      <img src="/logo.png" alt="Rodrigo Guerra" />
    </LogoLink>
  );
};

export default Logo;
