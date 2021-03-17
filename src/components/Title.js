import styled from 'styled-components';

const Wrapper = styled.h1`
  text-align: center;
  font-size: 1.875rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
`;

const Title = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Title;
