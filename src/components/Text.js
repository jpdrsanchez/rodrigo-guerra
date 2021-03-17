import styled from 'styled-components';

const Wrapper = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.02em;
  text-align: center;
`;

const Text = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Text;
