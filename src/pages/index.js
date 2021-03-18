import dynamic from 'next/dynamic';
import Head from 'next/head';

import Container from '../components/Container';
import Header from '../components/Header';
import AsideBg from '../components/helpers/AsideBg';
import HomeCta from '../components/Home/HomeCta';
// import HomeValues from '../components/Home/HomeValues';
import HomeNews from '../components/Home/HomeNews';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Newsletter from '../components/Newsletter';

const HomeValues = dynamic(() => import('../components/Home/HomeValues'), {
  ssr: false,
});

import useMediaQuery from '../hooks/useMediaQuery';
import { GET_ASIDE_POSTS } from '../lib/api';

const Home = ({ data }) => {
  const { desktop } = useMediaQuery();
  return (
    <Main>
      <Head>
        <title>Rodrigo Guerra | Home</title>
      </Head>
      <Container>
        <Layout page="home">
          <Header />
          <HomeCta />
          <Newsletter page="home" />
          {!desktop && (
            <AsideBg>
              <HomeValues />
              {data.map(
                (post, index) =>
                  index === 0 && (
                    <HomeNews
                      key={post.id}
                      category={post._embedded['wp:term'][0][0].name}
                      title={post.title.rendered}
                      link={post.slug}
                      image={post._embedded['wp:featuredmedia'][0].source_url}
                    />
                  ),
              )}
            </AsideBg>
          )}
          {desktop && (
            <>
              <HomeValues />
              {data.map(
                (post, index) =>
                  index === 0 && (
                    <HomeNews
                      key={post.id}
                      category={post._embedded['wp:term'][0][0].name}
                      title={post.title.rendered}
                      link={post.slug}
                      image={post._embedded['wp:featuredmedia'][0].source_url}
                    />
                  ),
              )}
            </>
          )}
          {data.map(
            (post, index) =>
              index > 0 && (
                <HomeNews
                  key={post.id}
                  category={post._embedded['wp:term'][0][0].name}
                  title={post.title.rendered}
                  link={post.slug}
                  image={post._embedded['wp:featuredmedia'][0].source_url}
                />
              ),
          )}
        </Layout>
      </Container>
    </Main>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(GET_ASIDE_POSTS(4));
  const data = await response.json();

  return {
    props: {
      data,
      revalidate: 60,
    },
  };
};

export default Home;
