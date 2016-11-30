import { FETCH_POSTS, FetchPosts } from './fetch-posts.action';
import { FETCH_POST, FetchPost } from './fetch-post.action';
import { CREATE_POST, createPost } from './create-post.action';
import { DELETE_POST, deletePost } from './delete-post.action';

export const API_ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '630e9b1d-5cae-4557-ac4a-c6c36d007895';
export { CREATE_POST, FETCH_POSTS, FETCH_POST, DELETE_POST, 
         createPost, FetchPosts, FetchPost, deletePost };