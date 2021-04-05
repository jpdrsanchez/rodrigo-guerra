import styled from 'styled-components';
import { showTranslate } from '../../styles/animations';

const Search = styled.form`
  display: flex;
  max-width: 54rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: max-content;
  opacity: 0;
  transform: translateX(-2rem);
  animation: ${showTranslate} 0.5s forwards;

  @media (max-width: 63.9375rem) {
    margin-bottom: 5.625rem;
  }

  @media (min-width: 64em) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 90em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  button {
    background: none;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    margin-right: 1rem;

    svg {
      path {
        transition: all 0.3s;
      }
    }

    &:hover {
      outline: none;
      svg {
        path {
          fill: var(--white);
        }
      }
    }

    &:focus {
      outline: none;
      svg {
        path {
          fill: var(--white);
        }
      }
    }
  }

  input {
    display: block;
    width: 100%;
    border: 0.0625rem solid rgba(255, 255, 255, 0.13);
    border-radius: 2.3125rem;
    background: none;
    padding: 0.5em 1rem;
    color: var(--white);
    line-height: 1;
    font-weight: 300;
    transition: all 0.3s;
    position: relative;

    &:focus {
      border-color: var(--white);
      outline: none;
    }
  }
`;

const BlogSearch = () => {
  return (
    <Search action="/">
      <button type="submit" aria-label="Pesquiser por postagem">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0697 21.6969C28.1775 16.4212 27.8064 8.78859 22.9566 3.93873C17.7049 -1.31291 9.19036 -1.31291 3.93873 3.93873C-1.31291 9.19036 -1.31291 17.7049 3.93873 22.9566C8.78859 27.8064 16.4212 28.1775 21.6969 24.0697C21.7197 24.0954 21.7434 24.1206 21.768 24.1452L28.8997 31.2769C29.5561 31.9333 30.6204 31.9333 31.2769 31.2769C31.9333 30.6204 31.9333 29.5561 31.2769 28.8997L24.1452 21.768C24.1206 21.7434 24.0954 21.7197 24.0697 21.6969ZM20.5793 6.31596C24.5181 10.2547 24.5181 16.6406 20.5793 20.5793C16.6406 24.5181 10.2547 24.5181 6.31596 20.5793C2.37723 16.6406 2.37723 10.2547 6.31596 6.31596C10.2547 2.37723 16.6406 2.37723 20.5793 6.31596Z"
            fill="#CC064C"
          />
        </svg>
      </button>
      <input
        type="text"
        name="search"
        id="search"
        aria-label="Digite o termo da pesquisa"
        autoComplete="off"
      />
    </Search>
  );
};

export default BlogSearch;
