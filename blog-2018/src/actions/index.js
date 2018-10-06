import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_API_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = `?key=cyHOw3gUJl`;

export function fetchPosts() {
  const request = axios.get(`${ROOT_API_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_API_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  // TODO: Handle exception
  
  return {
    type: CREATE_POST,
    payload: request
  }
}