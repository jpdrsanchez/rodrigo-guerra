import Link from 'next/link';
import styled from 'styled-components';
import { showTranslate } from '../../styles/animations';

const Wrapper = styled.section`
  max-width: 54rem;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateX(-2rem);
  animation: ${showTranslate} 0.5s forwards;

  @media (max-width: 63.9375em) {
    text-align: center;
  }

  h2 {
    font-size: 1.125rem;
    line-height: 1.3;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1.625rem;
    font-feature-settings: 'kern' off;
  }

  ul {
    @media (max-width: 63.9375em) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  li {
    &:not(:last-child) {
      a {
        &::after {
          @media (max-width: 63.9375em) {
            content: '-';
            display: block;
            margin: 0 0.5rem;
          }
        }
      }
    }
  }

  a {
    color: var(--white);
    font-size: 1.125rem;
    font-weight: 200;
    letter-spacing: 0.265em;
    line-height: 2;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: all 0.3s;

    &:hover {
      color: var(--pink);
    }
  }
`;

const BlogCategories = ({ categoryData }) => {
  return (
    <Wrapper>
      <h2>Categoria</h2>
      <nav>
        <ul>
          {categoryData
            .filter((category) => category.id !== 1)
            .map((category) => (
              <li key={category.id}>
                <Link href={`/blog/category/${category.slug}/1`}>
                  <a>{category.name}</a>
                </Link>
              </li>
            ))}
          <li>
            <Link href={`/blog/1`}>
              <a>Todas</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default BlogCategories;
