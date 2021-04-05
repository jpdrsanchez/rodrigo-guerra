import Link from 'next/link';
import { useState } from 'react';

import styled from 'styled-components';
import { showTranslate } from '../styles/animations';

const StyledMenu = styled.nav`
  position: relative;

  ul {
    @media (max-width: 63.9375em) {
      display: none;
      position: absolute;
      top: 3rem;
      right: 0;
      background: var(--pink);
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 20.25rem;
      z-index: 999;
    }

    @media (max-width: 24.9375em) {
      width: 17.5rem;
    }

    @media (min-width: 64em) {
      display: flex;
      align-items: center;
    }

    &.active {
      @media (max-width: 63.9375em) {
        display: block;
        opacity: 0;
        transform: translateY(-2rem);
        animation: ${showTranslate} 0.3s forwards;
      }
    }
  }

  li {
    &:not(:last-child) {
      @media (min-width: 64em) {
        margin-right: 1.875rem;
      }
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

    @media (max-width: 63.9375em) {
      display: block;
      text-align: right;
      line-height: 2.9;
      padding: 0.625rem 2.5rem 0.625rem 1rem;
      max-width: 100%;
    }

    &:hover {
      @media (max-width: 63.9375em) {
        background: var(--darkGray);
        box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
      }

      @media (min-width: 64em) {
        color: var(--pink);
      }
    }

    &.active {
      @media (max-width: 63.9375em) {
        background: var(--darkGray);
        box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
      }

      &::after {
        @media (min-width: 64em) {
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
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  padding: 0;
  border: none;
  width: 2.875rem;
  height: 1.5rem;
  background: none;
  position: relative;
  z-index: 999;

  &:focus {
    outline: none;
  }

  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 0.3125rem;
    background: var(--grey);
    box-shadow: 0 0.5625rem var(--grey), 0 -0.5625rem var(--grey);
    transition: all 0.3s;
  }

  &::after {
    background: var(--grey);
    display: block;
    content: '';
    width: 100%;
    height: 0.3125rem;
    position: absolute;
    transition: all 0.3s;
  }

  &.active {
    &::before {
      transform: rotate(45deg);
      box-shadow: none;
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  @media (min-width: 64em) {
    display: none;
  }
`;

const Cover = styled.div`
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: none;
  z-index: 998;

  &.active {
    @media (max-width: 63.9375rem) {
      display: block;
    }
  }
`;

const Menu = ({ current, className }) => {
  current = current.includes('blog') ? '/blog' : current;

  const menuItems = {
    ['/']: 'home',
    ['/sobre']: 'sobre',
    ['/blog']: 'blog',
  };

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <StyledMenu className={className}>
      <MenuButton
        aria-label="Abrir Menu"
        type="button"
        onClick={handleMenu}
        className={open ? 'active' : ''}
      />
      <ul className={open ? 'active' : ''}>
        <li>
          <Link href="/">
            <a
              className={menuItems[current] === 'home' ? 'active' : ''}
              onClick={handleMenu}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a
              className={menuItems[current] === 'sobre' ? 'active' : ''}
              onClick={handleMenu}
            >
              Sobre
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a
              className={menuItems[current] === 'blog' ? 'active' : ''}
              onClick={handleMenu}
            >
              Blog
            </a>
          </Link>
        </li>
      </ul>
      <Cover className={open ? 'active' : ''} onClick={handleMenu} />
    </StyledMenu>
  );
};

export default Menu;
