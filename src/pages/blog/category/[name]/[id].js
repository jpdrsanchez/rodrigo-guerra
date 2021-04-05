import { useRouter } from 'next/router';
import BlogCategories from '../../../../components/Blog/BlogCategories';
import BlogPagination from '../../../../components/Blog/BlogPagination';
import BlogSearch from '../../../../components/Blog/BlogSearch';
import BlogWrapper from '../../../../components/Blog/BlogWrapper';
import Loading from '../../../../components/Loading';
import Template from '../../../../components/Template';
import {
  GET_CATEGORY_BY_SLUG,
  GET_POST_BY_CATEGORIES,
} from '../../../../lib/api';
import { GET_CATEGORIES } from '../../../../lib/constants';
import fetchContents from '../../../../lib/fetchContents';

const Category = ({ data, links, categoryData }) => {
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
      <BlogWrapper postData={data} />
      <BlogPagination links={links} />
    </Template>
  );
};

export const getStaticPaths = async () => {
  const { data } = await fetchContents(GET_CATEGORIES);
  const paths = [];

  data.forEach((category) => {
    const totalPages = Array(Math.ceil(category.count / 6)).fill('');
    totalPages.forEach((page, index) => {
      paths.push({ params: { name: category.slug, id: `${index + 1}` } });
    });
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { name, id } = context.params;
  const { data: categoryData } = await fetchContents(GET_CATEGORIES);
  const { data: categorySlug } = await fetchContents(
    GET_CATEGORY_BY_SLUG(name),
  );
  const [category] = categorySlug;

  const { response, data } = await fetchContents(
    GET_POST_BY_CATEGORIES(6, 1, category.id),
  );

  const pages = response.headers.get('X-WP-TotalPages');
  const links = [];

  for (let i = 1; i <= pages; i++) {
    links.push(`${i}`);
  }

  if (!data)
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };

  return {
    props: {
      data,
      categoryData,
      links,
    },
    revalidate: 60,
  };
};

export default Category;
