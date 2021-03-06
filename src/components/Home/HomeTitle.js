import styled from 'styled-components';

import { showTranslate } from '../../styles/animations';

const Section = styled.section`
  padding-top: 16rem;
  padding-bottom: 5.25rem;

  @media (min-width: 64em) {
    padding-top: 9.75rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 200;
    text-transform: uppercase;
    word-break: break-all;
    transform: translateY(-2rem);
    opacity: 0;
    animation: ${showTranslate} 1s forwards;

    @media (min-width: 28.125em) {
      font-size: 6rem;
    }

    @media (min-width: 75em) {
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

const HomeTitle = () => {
  return (
    <Section>
      <h1>
        <span>A sala de guerra da</span>
        inova????o
      </h1>
      <p>
        Inova????o n??o ?? assunto para o futuro. ?? hora de coloc??-la em pr??tica.
      </p>
      <a href="/">Vamos l??!</a>
    </Section>
  );
};

export default HomeTitle;
