import axios from 'axios';
import { API_ROOT_URL, API_KEY } from '.';

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