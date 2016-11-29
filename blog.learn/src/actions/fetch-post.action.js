import axios from 'axios';
import { API_ROOT_URL, API_KEY } from '.';

export const FETCH_POST = 'FETCH_POST';

export function FetchPost(id){
    const apiUrl = `${API_ROOT_URL}/posts/${id}?key=${API_KEY}`;
    const request = axios.get(apiUrl);
    console.log(`[DEBUG-FetchPost] - url: ${apiUrl}, request:`, request);
    return {
        type: FETCH_POST,
        payload: request
    };
}