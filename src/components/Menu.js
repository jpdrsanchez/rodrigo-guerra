import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import styled, { css, keyframes } from 'styled-components';
import Link from 'next/link';

const showMenu = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`;

const MobileButton = styled.button`
  display: block;
  width: 2.875rem;
  height: 2.875rem;
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  outline: 0;
  position: relative;

  &::after {
    content: '';
    display: block;
    background-color: #c4c4c4;
    height: 0.3125rem;
    width: 100%;
    box-shadow: 0 0.5625rem #c4c4c4, 0 -0.5625rem #c4c4c4;
    transition: all 0.3s;
    ${(props) =>
      props.open &&
      css`
        transform: rotate(45deg);
        box-shadow: none;
      `}
  }

  &::before {
    content: '';
    display: block;
    background-color: #c4c4c4;
    height: 0.3125rem;
    width: 100%;
    position: absolute;
    top: 21px;
    transition: all 0.3s;
    ${(props) =>
      props.open &&
      css`
        transform: rotate(-45deg);
      `}
  }
`;

const MenuList = styled.ul`
  @media (max-width: 1023px) {
    background-color: var(--pink);
    padding: 2.5rem 0;
    margin-top: 0.875rem;
    position: absolute;
    z-index: 999;
    right: 0;
    opacity: 0;
    transform: translateY(-2rem);
    animation: ${showMenu} 0.3s forwards;
  }

  @media (min-width: 1024px) {
    display: flex;
  }

  li {
    &:not(:last-child) {
      @media (min-width: 1024px) {
        margin-right: 2rem;
      }
    }
  }

  a {
    color: var(--white);
    font-size: 1.125rem;
    font-weight: 200;
    letter-spacing: 0.265em;
    line-height: 2.905;
    text-transform: uppercase;
    transition: all 0.3s;

    &.active {
      &::after {
        @media (min-width: 1024px) {
          content: '';
          display: block;
          width: 95%;
          height: 0.1875rem;
          background-color: var(--pink);
        }
      }
    }

    @media (max-width: 1023px) {
      display: flex;
      padding-left: 13.25rem;
      padding-right: 2.625rem;
      text-align: right;
      height: 4.25rem;
      align-items: center;
      justify-content: flex-end;
    }

    &:hover {
      @media (max-width: 1023px) {
        background-color: var(--darkGray);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      @media (min-width: 1024px) {
        color: var(--pink);
      }
    }
  }
`;

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { mobile, tablet, desktop } = useMediaQuery();

  return (
    <nav>
      {(mobile || tablet) && (
        <MobileButton
          onClick={() => setOpen(!open)}
          open={open}
          aria-label="Abrir Menu"
          aria-expanded="false"
        />
      )}
      {(open || desktop) && (
        <MenuList
          onClick={() => {
            if (!desktop) setOpen(!open);
          }}
        >
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
        </MenuList>
      )}
    </nav>
  );
};

export default Menu;
