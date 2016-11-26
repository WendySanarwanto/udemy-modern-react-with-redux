import axios from 'axios';

const API_ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '630e9b1d-5cae-4557-ac4a-c6c36d007895';

export const FETCH_POSTS = 'FETCH_POSTS';

export function FetchPosts(){
    const apiUrl = `${API_ROOT_URL}/posts?key=${API_KEY}`;
    const request = axios.get(apiUrl);
    console.log(`[DEBUG-FetchPosts] - url: ${apiUrl}, request:`, request);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}