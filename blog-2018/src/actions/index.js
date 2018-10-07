import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

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

export function fetchPost(id){
  const request = axios.get(`${ROOT_API_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback){
  const request = axios.delete(`${ROOT_API_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}