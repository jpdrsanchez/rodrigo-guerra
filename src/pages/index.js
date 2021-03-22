import HomePosts from '../components/Home/HomePosts';
import HomeTitle from '../components/Home/HomeTitle';
import HomeValues from '../components/Home/HomeValues';
import Newsletter from '../components/Newsletter';
import Template from '../components/Template';
import { GET_ASIDE_POSTS } from '../lib/api';
import fetchContents from '../lib/fetchContents';

const index = ({ data }) => {
  return (
    <Template page="home">
      <HomeTitle />
      <Newsletter />
      <HomeValues />
      <HomePosts postData={data} />
    </Template>
  );
};

export const getStaticProps = async () => {
  const { data } = await fetchContents(GET_ASIDE_POSTS(4));

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

export default index;
