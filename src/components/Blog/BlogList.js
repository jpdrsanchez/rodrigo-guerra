import styled from 'styled-components';
import { showTranslate } from '../../styles/animations';
import BlogItem from './BlogItem';

const List = styled.ul`
  display: grid;
  gap: 4rem;
  padding-bottom: 4rem;
  opacity: 0;
  transform: translateX(2rem);
  animation: ${showTranslate} 0.5s forwards 0.3s;

  @media (max-width: 56.1875rem) {
    max-width: 27rem;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }

  @media (min-width: 56.25em) {
    gap: 5.5rem 4.25rem;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 5.5rem;
  }

  @media (min-width: 64em) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.9375rem 1.875rem;
    padding-left: 0.75rem;
    margin-top: 5rem;
  }
`;

const BlogList = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => (
        <BlogItem
          key={post.id}
          image={post._embedded['wp:featuredmedia'][0].link}
          category={post._embedded['wp:term'][0][0].name}
          title={post.title.rendered}
          link={post.slug}
        />
      ))}
    </List>
  );
};

export default BlogList;
