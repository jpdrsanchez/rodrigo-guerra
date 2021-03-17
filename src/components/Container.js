import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(var(--gutter) * 2);
  padding-right: calc(var(--gutter) * 2);

  @media (min-width: 1024px) {
    max-width: 62em;
  }

  @media (min-width: 1200px) {
    max-width: 73.25rem;
  }

  @media (min-width: 1440px) {
    max-width: 89.5rem;
  }
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
