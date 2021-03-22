import styled from 'styled-components';
import Container from './Container';
import Link from 'next/link';

const StyledFooter = styled.footer`
  padding-bottom: 2.5rem;
  padding-top: 2.8125rem;
`;

const FooterContainer = styled(Container)`
  @media (min-width: 37.5em) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    &:nth-of-type(1) {
      position: relative;

      @media (min-width: 37.5em) {
        margin-right: 2.375rem;
      }

      &::after {
        content: '';
        display: block;
        width: 0.0625rem;
        height: 4.375rem;
        background: rgba(255, 255, 255, 0.15);
        position: absolute;
        top: 50%;
        right: -2.375rem;
        transform: translateY(-50%);
      }
    }

    &:nth-of-type(2) {
      @media (min-width: 37.5em) {
        margin-left: 2rem;
      }
    }
  }

  img {
    max-width: 8.125rem;
    margin-bottom: 1.125rem;

    @media (max-width: 37.4375em) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  a {
    img {
      margin: 0 auto;
    }
  }

  h2 {
    font-size: 1.125rem;
    line-height: 1.3;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    font-feature-settings: 'kern' off;
    font-weight: 700;
    margin-bottom: 0.375rem;

    @media (max-width: 37.4375em) {
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

const FooterMenu = styled.nav`
  ul {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: center;
    row-gap: 0.5rem;

    @media (min-width: 37.5em) {
      grid-template-columns: 1fr 1fr;
    }
  }

  li {
    &:not(:last-child) {
      margin-right: 0;
    }

    &:first-child {
      margin-right: 0.625rem;
    }
  }

  a {
    color: var(--white);
    font-feature-settings: 'kern' off;
    font-size: 1.125rem;
    font-weight: 200;
    letter-spacing: 0.265em;
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
      color: var(--pink);
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
          <img src="/images/logo.png" alt="Logo Rodrigo Guerra" />
          <a href="https://www.linkedin.com/feed/">
            <img src="/images/linkedin.svg" alt="Linkedin" />
          </a>
        </div>
        <div>
          <h2>Menu</h2>
          <FooterMenu>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a>Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </FooterMenu>
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
