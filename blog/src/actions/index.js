import axios from 'axios';

const API_KEY = '?key=5220dec8-15d0-4618-904e-0a56466afde9';
const API_BASE_URL = 'http://reduxblog.herokuapp.com/api/posts';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts(){
    const apiUrl = `${API_BASE_URL}${API_KEY}`;
    let request = axios.get(apiUrl);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}
