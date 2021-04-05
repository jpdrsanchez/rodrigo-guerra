import {
  GET_CATEGORIES,
  GET_PAGES,
  GET_POSTS,
  GET_SITE_MENUS,
} from './constants';

export const GET_SINGLE_POST = (post_slug) => {
  return `${GET_POSTS}&slug=${post_slug}`;
};

export const GET_ASIDE_POSTS = (per_page) => {
  return `${GET_POSTS}&per_page=${per_page}&_fields=id,date,slug,title,_links`;
};

export const GET_POST_BY_CATEGORIES = (per_page, page, category_id) => {
  return `${GET_ASIDE_POSTS(per_page)}&categories=${category_id}&page=${page}`;
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

export const GET_POST_PAGINATION = (per_page, page) => {
  return `${GET_ASIDE_POSTS(per_page)}&page=${page}`;
};

export const GET_CATEGORY_BY_SLUG = (slug) => {
  return `${GET_CATEGORIES}?slug=${slug}&_fields=id`;
};
