import styled from 'styled-components';
import useMediaQuery from '../../hooks/useMediaQuery';
import { showTranslate } from '../../styles/animations';
import { useEffect, useRef, useState } from 'react';

const Wrapper = styled.section`
  display: grid;
  position: relative;
  transform: translateY(-2rem);
  opacity: 0;
  animation: ${showTranslate} 1s forwards;

  @media (max-width: 1023px) {
    margin-left: -1rem;
    margin-right: -1rem;
    row-gap: 0.1875rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 29.375rem;
    z-index: 999;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    margin-top: 1.75rem;
  }

  div {
    padding: 2rem 1rem;
    z-index: 500;

    @media (max-width: 1023px) {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.09);
      backdrop-filter: blur(4px);
    }

    @media (min-width: 1024px) {
      grid-row: 2;
      padding: 0.4375rem 0.5rem;
    }

    @media (min-width: 1200px) {
      padding: 1rem;
    }

    @media (min-width: 1440px) {
      padding: 1.8125rem 2.5rem;
    }
  }

  h2 {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.29;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 200;
    letter-spacing: -0.03em;
    line-height: 1.29;
  }

  img {
    position: absolute;
    @media (max-width: 1023px) {
      bottom: 100%;
      right: -20px;
      height: 40rem;
      width: auto;
    }

    @media (min-width: 1024px) {
      left: 50px;
      z-index: -1;
      bottom: 0;
    }

    @media (min-width: 1200px) {
      left: 80px;
    }
  }
`;

const Bg = styled.span`
  display: block;
  position: absolute;
  width: ${(props) => props.bgWidth && props.bgWidth * 2 + 'px'};
  height: ${(props) => props.bgHeight + 'px'};
  background-color: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(4px);
  background-image: url('/degrade.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 400;
`;

const HomeValues = () => {
  const { tablet, desktop } = useMediaQuery();
  const [divDimension, setDivDimension] = useState({ width: 0, height: 0 });
  const div = useRef();

  useEffect(() => {
    const setBgDimensions = () => {
      const { width, height } = div.current.getBoundingClientRect();
      setDivDimension({ width, height });
    };
    setBgDimensions();

    window.addEventListener('resize', setBgDimensions);
    return () => {
      window.removeEventListener('resize', setBgDimensions);
    };
  }, []);

  return (
    <Wrapper>
      {(tablet || desktop) && (
        <img src="/foto-rodrigo.png" alt="Foto Rodrigo Guerra" />
      )}
      <div ref={div}>
        <h2>Inovação</h2>
        <p>
          Vai além da adoção de tecnologia. Depende de mentalidade inovadora e
          modelos práticos que transformam negócios.
        </p>
      </div>
      <div>
        <h2>Saúde</h2>
        <p>
          Essa transformação de negócios só acontece quando pessoas se conectam
          e compartilham conhecimento.
        </p>
      </div>
      {desktop && (
        <Bg bgWidth={divDimension.width} bgHeight={divDimension.height} />
      )}
    </Wrapper>
  );
};

export default HomeValues;
