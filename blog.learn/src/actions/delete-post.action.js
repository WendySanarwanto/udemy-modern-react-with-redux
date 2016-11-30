import axios from 'axios';
import { API_ROOT_URL, API_KEY } from '.';

export const DELETE_POST = 'DELETE_POST';

export function deletePost(id){
    const apiUrl = `${API_ROOT_URL}/posts/${id}?key=${API_KEY}`;
    const request = axios.delete(apiUrl);
    console.log(`[DEBUG-deletePost] - url: ${apiUrl}, request:`, request);
    return {
        type: DELETE_POST,
        payload: request
    };
}