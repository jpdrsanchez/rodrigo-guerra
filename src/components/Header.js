import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const HeaderStyle = styled.header`
  padding-top: 4.375rem;
  padding-bottom: 5.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 999;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding-top: 2.25rem;
  }

  img {
    @media (min-width: 1024px) {
      margin: 0 auto;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <Menu />
    </HeaderStyle>
  );
};

export default Header;
