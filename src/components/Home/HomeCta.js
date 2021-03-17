import styled from 'styled-components';
import { showTranslate } from '../../styles/animations';

const StyledCta = styled.section`
  padding-top: 6.625rem;
  padding-bottom: 6.375rem;

  @media (min-width: 1024px) {
    position: relative;
    z-index: 999;
  }

  h1 {
    font-size: 4rem;
    font-weight: 200;
    text-transform: uppercase;
    word-break: break-all;
    transform: translateY(-2rem);
    opacity: 0;
    animation: ${showTranslate} 1s forwards;

    @media (min-width: 450px) {
      font-size: 6rem;
    }

    @media (min-width: 1200px) {
      font-size: 8.375rem;
    }
  }

  span {
    display: block;
    background-color: var(--pink);
    max-width: 19.375rem;
    padding: 0.25rem 0.25rem;
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: -0.025em;
    line-height: 1.09;
    text-transform: uppercase;
    position: relative;
    z-index: 100;
    word-break: normal;
    margin-bottom: 2rem;

    @media (min-width: 450px) {
      font-size: 2rem;
    }

    @media (min-width: 600px) {
      max-width: 26.25rem;
      font-size: 2.75rem;
    }
  }

  p {
    position: relative;
    font-size: 1.125rem;
    font-weight: 200;
    letter-spacing: -0.01em;
    line-height: 1.29;
    padding-left: 0.875rem;
    max-width: 18.3125rem;
    transform: translateY(-2rem);
    opacity: 0;
    animation: ${showTranslate} 1s forwards;
    margin-top: 2.375rem;

    &::before {
      content: '';
      display: block;
      width: 0.25rem;
      height: 100%;
      background-color: var(--pink);
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  a {
    color: var(--white);
    border: 0.03125rem solid rgba(255, 255, 255, 0.09);
    display: block;
    max-width: 8.875rem;
    margin-top: 3.375rem;
    padding: 0.75rem 0.125rem;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 200;
    line-height: 1.29;
    text-transform: uppercase;
    transition: all 0.3s;

    transform: translateY(-2rem);
    opacity: 0;
    animation: ${showTranslate} 1s forwards;

    &:hover {
      background: var(--pink);
    }
  }
`;

const HomeCta = () => {
  return (
    <StyledCta>
      <h1>
        <span>A sala de guerra da</span>
        inovação
      </h1>
      <p>
        Inovação não é assunto para o futuro. É hora de colocá-la em prática.
      </p>
      <a href="/">Vamos lá!</a>
    </StyledCta>
  );
};

export default HomeCta;
