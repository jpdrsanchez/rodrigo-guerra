import Head from 'next/head';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Photosnap Website Challenge</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
