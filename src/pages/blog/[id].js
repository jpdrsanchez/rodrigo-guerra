import BlogCategories from '../../components/Blog/BlogCategories';
import BlogSearch from '../../components/Blog/BlogSearch';
import BlogWrapper from '../../components/Blog/BlogWrapper';
import Template from '../../components/Template';
import { GET_POST_PAGINATION } from '../../lib/api';
import fetchContents from '../../lib/fetchContents';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import BlogPagination from '../../components/Blog/BlogPagination';
import { GET_CATEGORIES } from '../../lib/constants';

const blog = ({ postData, links, categoryData }) => {
  const { isFallback } = useRouter();

  if (isFallback)
    return (
      <Template page="loading">
        <Loading />
      </Template>
    );

  return (
    <Template page="blog">
      <BlogSearch />
      <BlogCategories categoryData={categoryData} />
      <BlogWrapper postData={postData} />
      <BlogPagination links={links} />
    </Template>
  );
};

export const getStaticPaths = async () => {
  const { response } = await fetchContents(GET_POST_PAGINATION(6, 1));
  const pages = response.headers.get('X-WP-TotalPages');
  const data = [];

  for (let i = 1; i <= pages; i++) {
    data.push(`${i}`);
  }

  const paths = data.map((page) => ({ params: { id: page } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const { data: categoryData } = await fetchContents(GET_CATEGORIES);
  const { response, data: postData } = await fetchContents(
    GET_POST_PAGINATION(6, id),
  );
  const pages = response.headers.get('X-WP-TotalPages');
  const links = [];

  for (let i = 1; i <= pages; i++) {
    links.push(`${i}`);
  }

  if (!postData)
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };

  return {
    props: {
      postData,
      categoryData,
      links,
    },
    revalidate: 60,
  };
};

export default blog;
