export const FETCH_POSTS = 'fetch_posts';
export const SELECT_POST = 'select_post';

export function fetch_posts() {
  return {
    type: FETCH_POSTS
  }
}

export function select_post(id) {
  return {
    type: SELECT_POST,
    payload: id
  }
}