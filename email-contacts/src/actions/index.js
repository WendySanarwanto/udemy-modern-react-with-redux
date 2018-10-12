import axios from 'axios';

export const FETCH_DATA = 'fetch_data';

const API_URL = 'http://jsonplaceholder.typicode.com/users';

export function fetchData() {
    const request = axios.get(API_URL);

    // Handle dispatch manually 
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: FETCH_DATA,
                payload: data
            });
        });
    };
}