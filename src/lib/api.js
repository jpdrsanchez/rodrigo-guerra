export const SITE_TITLE = 'Rodrigo Guerra';
export const SITE_URL = 'https://sites.hostgrano.com.br/rodrigoguerra';
export const API_URL = `${SITE_URL}/wp-json/wp/v2`;
export const GET_POSTS = `${API_URL}/posts?_embed=1`;
export const GET_CATEGORIES = `${API_URL}/categories`;
export const GET_PAGES = `${API_URL}/pages`;

export const GET_SINGLE_POST = (post_slug) => {
  return `${GET_POSTS}&slug=${post_slug}`;
};

export const GET_ASIDE_POSTS = (per_page) => {
  return `${GET_POSTS}&per_page=${per_page}`;
};

export const GET_POST_BY_CATEGORIES = (category_id) => {
  return `${GET_POSTS}&categories=${category_id}`;
};

export const GET_POST_BY_SEARCH = (search_term) => {
  return `${GET_POSTS}&search=${search_term}`;
};

export const GET_PAGE_BY_SLUG = (page_slug) => {
  return `${GET_PAGES}?slug=${page_slug}`;
};
