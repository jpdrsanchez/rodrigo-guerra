import styled from 'styled-components';

const Wrapper = styled.div`
  background: url('/aside-bg.png') no-repeat center center;
  background-size: cover;
  margin-right: -1rem;
  margin-left: -1rem;
`;

const AsideBg = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AsideBg;
