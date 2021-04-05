import styled from 'styled-components';
import Link from 'next/link';

const Pagination = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;

  a {
    font-weight: 300;
    font-size: 1.5rem;
    color: var(--white);
    width: 3rem;
    height: 3rem;
    background: rgba(204, 6, 76, 0.2);
    border: 0.03125rem solid rgba(255, 255, 255, 0.09);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    &:not(:last-of-type) {
      margin-right: 0.875rem;
    }

    &:hover {
      background: var(--pink);
    }
  }
`;

const BlogPagination = ({ links }) => {
  return (
    <Pagination>
      {links.map((link, index) => (
        <Link key={index} href={`/blog/${link}`}>
          <a>{link}</a>
        </Link>
      ))}
    </Pagination>
  );
};

export default BlogPagination;
