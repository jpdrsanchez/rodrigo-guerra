import { GET_PAGES, GET_POSTS, GET_SITE_MENUS } from './constants';

export const GET_SINGLE_POST = (post_slug) => {
  return `${GET_POSTS}&slug=${post_slug}`;
};

export const GET_ASIDE_POSTS = (per_page) => {
  return `${GET_POSTS}&per_page=${per_page}&_fields=id,date,slug,title,_links`;
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

export const GET_SINGLE_MENU = (menu_id) => {
  return `${GET_SITE_MENUS}/${menu_id}`;
};
