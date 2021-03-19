import Link from 'next/link';

import styled from 'styled-components';

const StyledMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }

  li {
    &:not(:last-child) {
      margin-right: 1.875rem;
    }
  }

  a {
    color: var(--white);
    font-feature-settings: 'kern' off;
    font-size: 1.125rem;
    font-weight: 200;
    letter-spacing: 0.265em;
    line-height: 1.25;
    position: relative;
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
      color: var(--pink);
    }

    &.active {
      &::after {
        background: var(--pink);
        content: '';
        display: block;
        height: 0.1875rem;
        width: 95%;
        position: absolute;
        bottom: -0.5rem;
      }
    }
  }
`;

const Menu = ({ current }) => {
  const menuItems = {
    ['/']: 'home',
    ['/sobre']: 'sobre',
    ['/blog']: 'blog',
  };

  return (
    <StyledMenu>
      <ul>
        <li>
          <Link href="/">
            <a className={menuItems[current] === 'home' ? 'active' : ''}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a className={menuItems[current] === 'sobre' ? 'active' : ''}>
              Sobre
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={menuItems[current] === 'blog' ? 'active' : ''}>
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
