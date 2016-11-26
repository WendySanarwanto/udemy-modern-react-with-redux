import axios from 'axios';
import { API_ROOT_URL, API_KEY } from '.';

export const CREATE_POST = 'CREATE_POST';

export function createPost(props){
    const apiUrl = `${API_ROOT_URL}/posts?key=${API_KEY}`;
    const request = axios.post(apiUrl, props);
    
    console.log(`[DEBUG-CreatePost] - url: ${apiUrl}, request:`, request);
    // console.log(`[DEBUG-CreatePost] - props = `, props);
    
    return {
        type: CREATE_POST,
        payload: request
    };
}