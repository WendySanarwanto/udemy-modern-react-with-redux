import axios from 'axios';

export const FETCH_DATA = 'fetch_data';

const API_URL = 'http://jsonplaceholder.typicode.com/users';

export function fetchData() {
    // TODO: Implement this
    const request = axios.get(API_URL);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: FETCH_DATA,
                payload: data
            });
        });
    };
}