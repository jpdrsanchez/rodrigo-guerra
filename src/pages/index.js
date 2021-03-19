import Menu from '../components/Menu';
import fetchContents from '../lib/fetchContents';
import { useRouter } from 'next/router';
import { GET_ASIDE_POSTS } from '../lib/api';

const index = ({ data }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Menu current={pathname} />
      <h1>Post List</h1>
      <ul style={{ color: 'black' }}>
        {data.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await fetchContents(`${GET_ASIDE_POSTS(4)}`);

  if (!data) return { notFound: true };

  return {
    props: {
      data,
      revalidate: 60,
    },
  };
};

export default index;
