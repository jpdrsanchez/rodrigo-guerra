import styled from 'styled-components';

import Link from 'next/link';

const Item = styled.li`
  border: 0.03125rem solid var(--white);
  position: relative;
  z-index: 500;

  header {
    height: 11.25rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  section {
    padding: 2.25rem 1.75rem;

    @media (min-width: 31.25em) {
      padding: 2.25rem;
    }
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.29;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: var(--pink);
    margin-bottom: 0.5rem;

    @media (min-width: 31.25em) {
      font-size: 1.125rem;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: -0.015em;
    line-height: 1.29;
    margin-bottom: 2.625rem;

    @media (min-width: 31.25em) {
      font-size: 1.875rem;
    }
  }

  a {
    display: block;
    max-width: 8.125rem;
    text-align: center;
    line-height: 1.29;
    font-weight: 200;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: rgba(204, 6, 76, 0.2);
    border: 0.03125rem solid rgba(255, 255, 255, 0.09);
    transition: all 0.3s;
    color: var(--white);
    padding: 0.625rem 0.5rem;

    &:hover {
      background: var(--pink);
    }
  }
`;

const BlogItem = ({ image, category, title, link }) => {
  return (
    <Item>
      <article>
        <header>
          <img src={image} alt={title} />
        </header>
        <section>
          <h3>{category}</h3>
          <h1>{title}</h1>
          <Link href={`/${link}`}>
            <a>Leia Mais</a>
          </Link>
        </section>
      </article>
    </Item>
  );
};

export default BlogItem;
