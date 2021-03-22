import styled from 'styled-components';

const TextWrapper = styled.div`
  padding-top: 3.75rem;
  padding-bottom: 2.625rem;

  @media (min-width: 50em) {
    column-count: 2;
    column-gap: 2.5rem;
    column-fill: auto;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media (min-width: 75em) {
    height: 40rem;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 200;
    line-height: 1.29;
    letter-spacing: -0.01em;
    text-align: justify;
    break-inside: auto;

    & + p {
      margin-top: 1.875rem;
    }
  }
`;

const SobreText = ({ content }) => {
  return <TextWrapper dangerouslySetInnerHTML={{ __html: content }} />;
};

export default SobreText;
