import { useState } from 'react';
import styled, { css } from 'styled-components';
import { showOpacity, showTranslate } from '../styles/animations';
import Input from './Form/Input';

const home = css`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: max-content max-content;
  height: max-content;
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(4px);
  padding: 1rem;
  position: relative;
  z-index: 600;
  justify-content: center;

  @media (max-width: 1023px) {
    margin-right: -1rem;
    margin-left: -1rem;
    padding: 2rem;
    grid-template-columns: auto auto;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    margin-top: 1.75rem;
    padding: 0.4375rem 1rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem 2rem 1rem 2rem;
  }

  @media (min-width: 1440px) {
    padding: 1.4375rem 2rem 1.375rem 2rem;
  }

  p {
    font-size: 1.875rem;
    font-weight: 300;
    letter-spacing: -0.015em;
    line-height: 1.29;
    text-align: center;
    margin-bottom: 0.9375rem;
    grid-row: 1;
    grid-column: span 2;

    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }

    @media (min-width: 1440px) {
      font-size: 1.875rem;
    }
  }

  input {
    grid-row: 2;
    grid-column: 1;
    text-align: center;
    @media (max-width: 1023px) {
      width: 100%;
      max-width: 18.75rem;
    }
  }

  button {
    grid-row: 2;
    grid-column: 2;
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

    @media (min-width: 1200px) {
      width: 5rem;
    }

    @media (min-width: 1440px) {
      width: 8.125rem;
    }

    &:hover {
      background: var(--pink);
    }

    &:focus {
      outline: none;
    }
  }
`;

const post = css`
  border: 0.03125rem solid var(--white);
  position: relative;
  z-index: 500;
  opacity: 0;
  transform: translateX(-2rem);
  animation: ${showTranslate} 0.5s forwards;
  padding: 2.25rem 1.75rem;

  @media (min-width: 500px) {
    padding: 1.75rem 2.25rem;
  }

  p {
    font-size: 1.875rem;
    letter-spacing: -0.015em;
    line-height: 1.29;
    text-align: center;
    margin-bottom: 1.25rem;
  }

  input {
    margin-bottom: 1.25rem;
    text-align: center;
  }

  button {
    color: var(--white);
    background: rgba(204, 6, 76, 0.2);
    border: 0.03125rem solid rgba(255, 255, 255, 0.09);
    display: block;
    width: 100%;
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
    margin: 0 auto;

    &:hover {
      background: var(--pink);
    }

    &:focus {
      outline: none;
    }
  }
`;

const Form = styled.form`
  ${({ page }) => {
    if (page === 'home') return home;
    else if (page === 'post') return post;
    else return null;
  }}
`;

const sentHome = css`
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(4px);
  padding: 2rem;
  position: relative;
  z-index: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    margin-right: -1rem;
    margin-left: -1rem;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    margin-top: 1.75rem;
    height: 95px;
    line-height: 1.6;
  }

  @media (min-width: 1200px) {
    height: 113px;
  }

  @media (min-width: 1440px) {
    height: 139px;
  }

  p {
    font-size: 1.125rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    opacity: 0;
    animation: ${showOpacity} 0.5s forwards;
  }
`;
const sentPost = css`
  border: 0.03125rem solid var(--white);
  position: relative;
  z-index: 500;
  opacity: 0;
  transform: translateX(-2rem);
  animation: ${showTranslate} 0.5s forwards;
  padding: 2.25rem 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    padding: 1.75rem 2.25rem;
  }

  p {
    font-size: 1.875rem;
    letter-spacing: -0.015em;
    line-height: 1.29;
    text-align: center;
  }
`;

const Sent = styled.div`
  ${({ page }) => {
    if (page === 'home') return sentHome;
    else if (page === 'post') return sentPost;
    else return null;
  }}
`;

const Newsletter = ({ page }) => {
  const [news, setNews] = useState('');
  const [sent, setSent] = useState(false);
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (regex.test(news)) {
      setSent(true);
    }
  };

  if (sent)
    return (
      <Sent page={page}>
        <p>Obrigado pelo cadastro!</p>
      </Sent>
    );
  else
    return (
      <Form action="/" page={page} onSubmit={handleSubmit}>
        <p>assine nossa newsletter</p>
        <Input
          type="email"
          id="newsletter"
          value={news}
          setValue={setNews}
          aria-label="Digite seu e-mail"
          placeholder="Email"
        />
        <button type="submit">Assinar</button>
      </Form>
    );
};

export default Newsletter;
