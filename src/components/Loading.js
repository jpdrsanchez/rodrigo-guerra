import styled, { keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;

  div {
    position: absolute;
    border: 0.25rem solid var(--pink);
    opacity: 1;
    border-radius: 50%;
    animation: ${LoadingAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <div></div>
      <div></div>
    </Wrapper>
  );
};

export default Loading;
