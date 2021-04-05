import styled, { css } from 'styled-components';

import Container from './Container';
import Loading from './Loading';

const Main = styled.main`
  position: relative;
  background: url('/images/site-bg-detail.png') no-repeat right top,
    url('/images/site-bg.png') no-repeat center center;
  background-size: auto, cover;
  width: 100%;
  z-index: 400;
  overflow-x: hidden;
`;

const MainTemplate = styled(Container)`
  display: grid;
  grid-template-columns: 100%;
  overflow-x: hidden;
`;

const ColumnWrapper = styled.div`
  display: none;
  @media (min-width: 64em) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-area: 1 / 1;
  }
`;

const Column = styled.div`
  border-right: 0.0625rem solid rgba(255, 255, 255, 0.09);

  &:first-of-type {
    border-left: 0.0625rem solid rgba(255, 255, 255, 0.09);
  }
`;

const home = css`
  @media (min-width: 64em) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row: auto auto auto;
  }

  &::before {
    @media (min-width: 64em) {
      content: '';
      display: block;
      grid-column: 1;
      grid-row: 1 / 4;
      width: 100%;
      background: url('/images/aside-bg.png') no-repeat center center;
      background-size: cover;
    }
  }

  & > * {
    &:nth-child(1) {
      @media (min-width: 64em) {
        grid-column: 2 / 5;
        grid-row: 1;
      }
    }

    &:nth-child(2) {
      @media (min-width: 64em) {
        grid-column: 2;
        grid-row: 2;
      }
    }

    &:nth-child(3) {
      @media (min-width: 64em) {
        grid-column: 3 / 5;
        grid-row: 2;
      }
    }

    &:nth-child(4) {
      @media (min-width: 64em) {
        grid-column: 1 / 5;
        grid-row: 3;
      }
    }
  }
`;

const blog = css`
  padding-top: 9.75rem;
  @media (min-width: 64em) {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 8.375rem 1fr auto;
  }

  & > * {
    &:nth-child(1) {
      @media (min-width: 64em) {
        grid-column: 1;
        grid-row: 1;
        align-self: center;
      }
    }

    &:nth-child(2) {
      @media (min-width: 64em) {
        grid-column: 1;
        grid-row: 2;
      }
    }

    &:nth-child(3) {
      @media (min-width: 64em) {
        grid-column: 2;
        grid-row: 1 / 3;
      }
    }

    &:nth-child(4) {
      @media (min-width: 64em) {
        grid-column: 2;
        grid-row: 3;
      }
    }
  }
`;

const loading = css`
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const PageTemplate = styled.div`
  display: grid;
  grid-area: 1 / 1;

  ${(props) => {
    if (props.page === 'home') return home;
    if (props.page === 'blog') return blog;
    if (props.page === 'loading') return loading;
    else return null;
  }}
`;

const Template = ({ page, children }) => {
  return (
    <Main>
      <MainTemplate>
        <ColumnWrapper>
          <Column />
          <Column />
          <Column />
          <Column />
        </ColumnWrapper>
        <PageTemplate page={page}>{children}</PageTemplate>
      </MainTemplate>
    </Main>
  );
};

export default Template;
