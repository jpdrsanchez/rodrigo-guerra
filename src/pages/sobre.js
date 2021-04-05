import SobreCv from '../components/Sobre/SobreCv';
import SobreIntro from '../components/Sobre/SobreIntro';
import SobreText from '../components/Sobre/SobreText';
import Template from '../components/Template';
import { GET_PAGE_BY_SLUG } from '../lib/api';
import fetchContents from '../lib/fetchContents';

const sobre = ({ data }) => {
  const [pageData] = data;
  const { foto, bio, descricao_detalhada, curriculo } = pageData.acf;
  return (
    <Template>
      <SobreIntro introImage={foto} introText={bio} />
      <SobreText content={descricao_detalhada} />
      <SobreCv content={curriculo} />
    </Template>
  );
};

export const getStaticProps = async () => {
  const { data } = await fetchContents(GET_PAGE_BY_SLUG('sobre'));

  return {
    props: {
      data,
    },
    revalidate: 600,
  };
};

export default sobre;
