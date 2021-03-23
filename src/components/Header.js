import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components';

import Menu from '../components/Menu';
import Container from './Container';

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  top: 2rem;
  left: 0;
  z-index: 500;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 64em) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
  }

  & > a {
    display: block;
    width: 100%;
    max-width: 10.25rem;

    @media (min-width: 64em) {
      margin: 0 auto;
    }
  }
`;

const Header = () => {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <HeaderContainer>
        <Link href="/">
          <a>
            <img src="/images/logo.png" alt="Home - Rodrigo Guerra" />
          </a>
        </Link>
        <Menu current={pathname} />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
