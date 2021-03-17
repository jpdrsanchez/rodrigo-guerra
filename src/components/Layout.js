import styled, { css } from 'styled-components';

const home = css`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  & > * {
    &:nth-child(1) {
      grid-row: 1;
      @media (min-width: 1024px) {
        grid-column: 1 / 5;
      }
    }

    &:nth-child(2) {
      grid-row: 2;
      @media (min-width: 1024px) {
        grid-column: 2 / 4;
      }
    }

    &:nth-child(3) {
      grid-row: 3;
      @media (min-width: 1024px) {
        grid-row: 3;
        grid-column: 2 / 3;
      }
    }

    &:nth-child(4) {
      grid-row: 4;
      @media (min-width: 1024px) {
        grid-row: 3;
        grid-column: 3 / 5;
      }
    }

    &:nth-child(5) {
      grid-row: 5;
      @media (min-width: 1024px) {
        grid-row: 1 / 5;
        grid-column: 1;
      }
    }

    &:nth-child(6) {
      grid-row: 6;
      @media (min-width: 1024px) {
        grid-row: 1 / 5;
        grid-column: 2;
      }
    }

    &:nth-child(7) {
      grid-row: 7;
      @media (min-width: 1024px) {
        grid-row: 1 / 5;
        grid-column: 3;
      }
    }

    &:nth-child(8) {
      grid-row: 8;
      @media (min-width: 1024px) {
        grid-row: 1 / 5;
        grid-column: 4;
      }
    }

    &:nth-child(9) {
      @media (max-width: 1023px) {
        grid-row: 3 / 5;
      }
    }
  }
`;

const blog = css`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'menu menu menu menu'
      'search blog blog blog'
      'category blog blog blog';
    grid-template-rows: auto auto 1fr;
  }

  & > * {
    &:nth-child(1) {
      @media (min-width: 1024px) {
        grid-area: menu;
      }
    }

    &:nth-child(2) {
      @media (min-width: 1024px) {
        grid-area: search;
      }
    }

    &:nth-child(3) {
      @media (min-width: 1024px) {
        grid-area: category;
      }
    }

    &:nth-child(4) {
      @media (min-width: 1024px) {
        grid-area: blog;
      }
    }

    &:nth-child(5) {
      @media (min-width: 1024px) {
        grid-column: 1;
        grid-row: 1 / 4;
        border-right: 1px solid rgba(255, 255, 255, 0.09);
        border-left: 1px solid rgba(255, 255, 255, 0.09);
      }
    }

    &:nth-child(6) {
      @media (min-width: 1024px) {
        grid-column: 2;
        grid-row: 1 / 4;
        border-right: 1px solid rgba(255, 255, 255, 0.09);
      }
    }

    &:nth-child(7) {
      @media (min-width: 1024px) {
        grid-column: 3;
        grid-row: 1 / 4;
        border-right: 1px solid rgba(255, 255, 255, 0.09);
      }
    }

    &:nth-child(8) {
      @media (min-width: 1024px) {
        grid-column: 4;
        grid-row: 1 / 4;
        border-right: 1px solid rgba(255, 255, 255, 0.09);
      }
    }
  }
`;

const post = css`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'menu menu menu menu'
      'list wrapper wrapper wrapper';
  }

  & > * {
    &:nth-child(1) {
      @media (min-width: 1024px) {
        grid-area: menu;
      }
    }

    &:nth-child(2) {
      @media (min-width: 1024px) {
        grid-area: wrapper;
      }
    }

    &:nth-child(3) {
      @media (min-width: 1024px) {
        grid-area: list;
      }
    }

    &:nth-child(4) {
      @media (min-width: 1024px) {
        grid-column: 1;
        grid-row: 1 / 4;
        border-right: 1px solid rgba(255, 255, 255, 0.09);
        border-left: 1px solid rgba(255, 255, 255, 0.09);
      }
    }

    &:nth-child(5) {
      @media (min-width: 1024px) {
        grid-column: 2;
        grid-row: 1 / 4;
        border-right: 1px solid rgba(255, 255, 255, 0.09);
      }
    }

    &:nth-child(6) {
      @media (min-width: 1024px) {
        grid-column: 3;
        grid-row: 1 / 4;
        border-right: 1px solid rgba(255, 255, 255, 0.09);
      }
    }

    &:nth-child(7) {
      @media (min-width: 1024px) {
        grid-column: 4;
        grid-row: 1 / 4;
        border-right: 1px solid rgba(255, 255, 255, 0.09);
      }
    }
  }
`;

const loading = css`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  & > * {
    &:nth-child(1) {
      grid-row: 1;
      @media (min-width: 1024px) {
        grid-column: 1 / 5;
      }
    }

    &:nth-child(2) {
      grid-row: 2;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (min-width: 1024px) {
        grid-column: 1 / 5;
      }
    }
  }
`;

const sobre = css`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  & > * {
    &:nth-child(1) {
      grid-row: 1;
      grid-column: 1 / 5;
    }

    &:nth-child(2) {
      grid-row: 2;
      grid-column: 1 / 5;
      position: relative;
      z-index: 500;
    }

    &:nth-child(3) {
      grid-row: 3;
      grid-column: 1 / 5;
    }

    &:nth-child(4) {
      grid-row: 4;
      grid-column: 1 / 5;
    }

    &:nth-child(5) {
      grid-row: 1 / 3;
      grid-column: 1;
      border-left: 1px solid rgba(255, 255, 255, 0.09);
      border-right: 1px solid rgba(255, 255, 255, 0.09);
      background: url('/aside-bg.png') no-repeat center center;
      background-size: cover;
    }

    &:nth-child(6) {
      grid-row: 1 / 3;
      grid-column: 2;
      border-right: 1px solid rgba(255, 255, 255, 0.09);
    }

    &:nth-child(7) {
      grid-row: 1 / 3;
      grid-column: 3;
      border-right: 1px solid rgba(255, 255, 255, 0.09);
    }

    &:nth-child(8) {
      grid-row: 1 / 3;
      grid-column: 4;
      border-right: 1px solid rgba(255, 255, 255, 0.09);
    }
  }
`;

const LayoutStyle = styled.div`
  ${({ page }) => {
    if (page === 'home') return home;
    else if (page === 'blog') return blog;
    else if (page === 'post') return post;
    else if (page === 'sobre') return sobre;
    else if (page === 'loading') return loading;
    else return null;
  }}
`;

const Layout = ({ children, page }) => {
  return <LayoutStyle page={page}>{children}</LayoutStyle>;
};

export default Layout;
