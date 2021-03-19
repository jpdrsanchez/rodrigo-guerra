import styled from 'styled-components';
import { showTranslate } from '../../styles/animations';

const Values = styled.section`
  position: relative;
  transform: translateY(-2rem);
  opacity: 0;
  animation: ${showTranslate} 1s forwards;

  @media (max-width: 63.9375em) {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  @media (min-width: 64em) {
    margin-bottom: 9.5rem;
  }

  img {
    position: absolute;
    bottom: 100%;
    right: -6rem;

    @media (max-width: 49.9375em) {
      display: none;
    }

    @media (min-width: 90em) {
      bottom: 0;
      right: -0.875rem;
    }
  }

  & > div {
    backdrop-filter: blur(4px);
    background-image: url('/images/aside-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    @media (min-width: 64em) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      background: url('/images/degrade.png') no-repeat center center;
      background-size: cover;
    }

    div {
      padding: 2rem;
      background-color: rgba(255, 255, 255, 0.09);

      @media (max-width: 63.9375em) {
        margin-bottom: 0.1875rem;
        text-align: center;
      }

      @media (min-width: 64em) {
        padding: 1rem 0.5625rem;
      }

      @media (min-width: 75em) {
        padding: 2rem;
      }

      @media (min-width: 90em) {
        padding-right: 2.375rem;
        padding-left: 2.375rem;
      }
    }
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 200;
    letter-spacing: -0.03em;
    line-height: 1.3;

    @media (min-width: 64em) {
      max-width: 14.875rem;
    }
  }
`;

const HomeValues = () => {
  return (
    <Values>
      <img src="/images/foto-rodrigo.png" alt="Foto Rodrigo Guerra" />
      <div>
        <div>
          <h2>Inovação</h2>
          <p>
            Vai além da adoção de tecnologia. Depende de mentalidade inovadora e
            modelos práticos que transformam negócios.
          </p>
        </div>
        <div>
          <h2>Conexão</h2>
          <p>
            Essa transformação de negócios só acontece quando pessoas se
            conectam e compartilham conhecimento.
          </p>
        </div>
      </div>
    </Values>
  );
};

export default HomeValues;
