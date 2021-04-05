import styled from 'styled-components';
import BlogList from './BlogList';

const Wrapper = styled.section`
  @media (max-width: 63.9375em) {
    padding-top: 5rem;
    max-width: 54rem;
    margin-left: auto;
    margin-right: auto;
  }

  & > h1 {
    font-size: 6rem;
    font-weight: 200;
    letter-spacing: -0.025em;
    text-transform: uppercase;

    @media (max-width: 63.9375em) {
      margin-bottom: 5rem;
      text-align: center;
    }

    @media (min-width: 37.5em) {
      font-size: 8.375rem;
    }
  }
`;

const BlogWrapper = ({ postData }) => {
  return (
    <Wrapper>
      <h1>Blog</h1>
      <BlogList posts={postData} />
    </Wrapper>
  );
};

export default BlogWrapper;
