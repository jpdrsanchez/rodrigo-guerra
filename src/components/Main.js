import styled from 'styled-components';

const MainStyled = styled.main`
  background: url('/site-bg-detail.png') no-repeat right top,
    url('/site-bg.png') no-repeat center center;
  background-size: auto, cover;
  overflow-x: hidden;
`;

const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};

export default Main;
