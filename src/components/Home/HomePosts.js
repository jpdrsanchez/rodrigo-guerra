import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;

  @media (max-width: 63.9375em) {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  @media (min-width: 64em) {
    grid-template-columns: repeat(4, 1fr);
  }

  article {
    padding: 2.5rem 1.5rem 2.5rem;
    line-height: 1.3;

    &:first-of-type {
      @media (max-width: 63.9375em) {
        background: url('/images/aside-bg.png') no-repeat center center;
        background-size: cover;
      }
    }

    @media (max-width: 63.9375em) {
      text-align: center;
    }

    @media (min-width: 64em) {
      padding: 0 1.5rem 3.375rem;
    }

    @media (min-width: 75em) {
      padding-right: 2rem;
      padding-left: 2rem;
    }

    @media (min-width: 90em) {
      padding-right: 2.75rem;
      padding-left: 2.75rem;
    }
  }

  img {
    width: 100%;
    height: 11.25rem;
    object-fit: cover;
    object-position: center;
    margin-bottom: 1.25rem;

    @media (max-width: 63.9375em) {
      max-width: 18.75rem;
      margin-right: auto;
      margin-left: auto;
    }
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  h1 {
    font-size: 1.875rem;
    font-weight: 300;
    letter-spacing: -0.015em;
    margin-bottom: 3.625rem;
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

    &:hover {
      background: var(--pink);
    }

    @media (max-width: 63.9375em) {
      margin: 0 auto;
    }
  }
`;

const HomePosts = ({ postData }) => {
  if (postData)
    return (
      <Wrapper>
        {postData.map((post) => (
          <article key={post.id}>
            <img
              src={post._embedded['wp:featuredmedia'][0].link}
              alt={post._embedded['wp:featuredmedia'][0].alt_text}
            />
            <h2>{post._embedded['wp:term'][0][0].name}</h2>
            <h1>{post.title.rendered}</h1>
            <Link href={`/blog/${post.slug}`}>
              <a>Leia Mais</a>
            </Link>
          </article>
        ))}
      </Wrapper>
    );
  else return null;
};

export default HomePosts;
