import styled from 'styled-components';

const Wrapper = styled.section`
  @media (min-width: 50em) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media (min-width: 75em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  div {
    padding: 2.5rem 3.5rem 3.75rem;
    background: rgba(255, 255, 255, 0.09);
    width: 100%;
  }

  h1 {
    font-size: 3rem;
    font-weight: 200;
    letter-spacing: -0.025em;
    margin-bottom: 1.25rem;
    text-transform: uppercase;

    @media (min-width: 400px) {
      font-size: 4rem;
    }

    @media (min-width: 600px) {
      font-size: 5.125rem;
    }
  }

  li {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.01em;

    &:not(:last-child) {
      margin-bottom: 1.625rem;
    }

    &::before {
      content: '• ';
    }
  }
`;

const SobreCv = ({ content }) => {
  return (
    <Wrapper>
      <div>
        <h1>Currículo</h1>
        <ul>
          {content.map(({ texto }, index) => (
            <li key={index}>{texto}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default SobreCv;
