import Link from 'next/link';
import styled from 'styled-components';

const NewsCard = styled.article`
  line-height: 1.29;
  position: relative;
  z-index: 1;

  @media (max-width: 1023px) {
    margin-left: -1rem;
    margin-right: -1rem;
    padding: 2.75rem 1rem 2.25rem;
    text-align: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-right: 0.0625rem solid rgba(255, 255, 255, 0.09);
    padding: 2.75rem 1.5rem 3.25rem;
  }

  @media (min-width: 1200px) {
    padding: 2.75rem 2.75rem 3.25rem;
  }

  &:not(:last-of-type) {
    @media (max-width: 1023px) {
      border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.09);
    }
  }

  &:first-of-type {
    @media (min-width: 1024px) {
      background: url('/aside-bg.png') no-repeat center center;
      background-size: cover;
      border-left: 0.0625rem solid rgba(255, 255, 255, 0.09);
    }
  }

  img {
    height: 12.5rem;
    width: 12.5rem;
    object-fit: cover;
    object-position: center;
    margin-bottom: 1.25rem;

    @media (max-width: 1023px) {
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 1024px) {
      width: 100%;
      height: 8.4375rem;
    }

    @media (min-width: 1440px) {
      height: 11.25rem;
    }
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.875rem;
    font-weight: 300;
    letter-spacing: -0.015em;
    margin-bottom: 2.25rem;

    &:only-of-type {
      margin-bottom: 3.625rem;
    }

    &:last-of-type:not(:only-of-type) {
      font-size: 1.125rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }
  }

  a {
    color: var(--white);
    background: rgba(204, 6, 76, 0.2);
    border: 0.03125rem solid rgba(255, 255, 255, 0.09);
    display: block;
    max-width: 8.875rem;
    padding: 0.75rem 0.125rem;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 200;
    line-height: 1.29;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.3s;

    @media (max-width: 1023px) {
      margin: 0 auto;
    }

    &:hover {
      background: var(--pink);
    }
  }
`;

const HomeNews = ({ category, title, link, image }) => {
  return (
    <NewsCard>
      <img src={image} alt={title} />
      <h2>{category}</h2>
      <p>{title}</p>
      <Link href={`/blog/${link}`}>
        <a>Leia Mais</a>
      </Link>
    </NewsCard>
  );
};

export default HomeNews;
