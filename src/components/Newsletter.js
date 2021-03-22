import styled from 'styled-components';
import { showTranslate } from '../styles/animations';

const Form = styled.form`
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(0.25rem);
  height: max-content;
  display: grid;
  grid-template-columns: minmax(auto, 300px) auto(auto, 96px);
  align-items: center;
  padding: 2rem;
  z-index: 600;
  position: relative;
  justify-content: center;
  transform: translateY(-2rem);
  opacity: 0;
  animation: ${showTranslate} 1s forwards;

  @media (max-width: 63.9375em) {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  @media (min-width: 64em) {
    grid-template-columns: 1fr auto;
    padding: 0.84375rem 0.5625rem;
  }

  @media (min-width: 75em) {
    padding: 1.59375rem 1.25rem;
  }

  @media (min-width: 90em) {
    padding-right: 2.25rem;
    padding-left: 2.25rem;
  }

  p {
    font-size: 1.875rem;
    font-weight: 300;
    letter-spacing: -0.015em;
    line-height: 1.29;
    text-align: center;
    margin-bottom: 1.25rem;
    grid-column: span 2;

    @media (min-width: 64em) {
      font-size: 1.25rem;
    }

    @media (min-width: 75em) {
      font-size: 1.625rem;
    }

    @media (min-width: 90em) {
      font-size: 1.875rem;
      margin-bottom: 0.9375rem;
    }
  }

  input {
    position: relative;
    z-index: 500;
    background: none;
    display: block;
    width: 100%;
    border: 0.0625rem solid rgba(255, 255, 255, 0.13);
    border-radius: 2.3125rem;
    padding: 0.5em 1rem;
    color: var(--white);
    line-height: 1;
    outline: 0px;
    font-weight: 300;
    transition: all 0.3s ease 0s;
    max-width: 18.75rem;
    margin-left: auto;
  }

  button {
    grid-area: 2 / 2 / auto / auto;
    color: var(--white);
    background: rgba(204, 6, 76, 0.2);
    border: 0.03125rem solid rgba(255, 255, 255, 0.09);
    display: block;
    width: 6rem;
    max-width: 8.875rem;
    padding: 0.75rem 0.125rem;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 200;
    line-height: 1.29;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.3s;
    cursor: pointer;
    margin-left: 0.625rem;

    &:hover {
      background: var(--pink);
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }
`;

const Newsletter = () => {
  return (
    <Form action="/" onSubmit={(e) => e.preventDefault()}>
      <p>assine nossa newsletter</p>
      <input
        type="email"
        id="newsletter"
        name="newsletter"
        aria-label="Digite seu e-mail"
        placeholder="Email"
      />
      <button type="submit">Assinar</button>
    </Form>
  );
};

export default Newsletter;
