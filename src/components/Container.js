import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 64em) {
    max-width: 62em;
  }

  @media (min-width: 75em) {
    max-width: 73.25rem;
  }

  @media (min-width: 90em) {
    max-width: 89.5rem;
  }
`;

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
