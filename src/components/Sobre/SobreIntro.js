import styled from 'styled-components';
import { showTranslate } from '../../styles/animations';

const Intro = styled.section`
  padding-top: 10rem;
  padding-bottom: 2rem;
  width: 100%;
  margin: 0 auto;
  display: grid;

  @media (min-width: 52.5em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 64em) {
    grid-template-columns: repeat(4, 1fr);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    opacity: 0;
    transform: translateX(-2rem);
    animation: ${showTranslate} 0.5s forwards;

    @media (max-width: 31.1875em) {
      max-width: 360px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 31.25em) {
      height: 560px;
    }

    @media (min-width: 52.5em) {
      grid-column: 1;
      grid-row: 1;
      height: 560px;
    }

    @media (min-width: 64em) {
      padding-left: 5.125rem;
      grid-column: 1 / 3;
      height: 742px;
    }
  }

  div {
    &:nth-of-type(1) {
      grid-row: 1;
      opacity: 0;
      transform: translateX(2rem);
      animation: ${showTranslate} 0.5s forwards 0.3s;

      @media (min-width: 52.5em) {
        grid-column: 2;
        padding-left: 2.8125rem;
      }

      @media (min-width: 64em) {
        grid-column: 3 / 5;
      }
    }

    &:nth-of-type(2) {
      padding: 1rem;
      align-self: end;
      background: var(--pink);
      margin-bottom: 0.75rem;
      grid-row: 3;
      opacity: 0;
      transform: translateX(2rem);
      animation: ${showTranslate} 0.5s forwards 0.3s;

      @media (max-width: 49.9375em) {
        margin-top: 1rem;
      }

      @media (min-width: 52.5em) {
        grid-column: 1 / 3;
        grid-row: 1;
        padding: 2.625rem;
      }

      @media (min-width: 52.5em) and (max-width: 63.9375em) {
        margin: 1rem;
      }

      @media (min-width: 64em) {
        grid-column: 2 / 5;
      }

      p {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: -0.01em;
        line-height: 1.29;

        @media (min-width: 64em) {
          font-size: 2rem;
        }
      }
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      line-height: 1.08;
      text-transform: uppercase;
      margin-bottom: 1rem;

      @media (min-width: 52.5em) {
        margin-bottom: 5.625rem;
      }

      @media (min-width: 64em) {
        margin-bottom: 5.625rem;
        font-size: 2.25rem;
      }
    }

    h1 {
      font-size: 5rem;
      font-weight: 200;
      line-height: 1.08;
      letter-spacing: -0.025em;
      text-transform: uppercase;
      word-break: break-all;
      max-width: 20rem;

      @media (min-width: 25em) {
        font-size: 6rem;
        max-width: 25rem;
      }

      @media (max-width: 52.4375em) {
        margin-bottom: 2rem;
      }

      @media (min-width: 64em) {
        font-size: 7rem;
        max-width: 33.125rem;
      }

      @media (min-width: 75em) {
        font-size: 8.375rem;
      }
    }
  }
`;

const SobreIntro = ({ introImage, introText }) => {
  return (
    <Intro>
      <img src={introImage} alt="Rodrigo Guerra" />
      <div>
        <h2>Sobre</h2>
        <h1>Rodrigo Guerra</h1>
      </div>
      <div>
        <p>{introText}</p>
      </div>
    </Intro>
  );
};

export default SobreIntro;
