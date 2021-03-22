import Footer from '../components/Footer';
import Header from '../components/Header';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
