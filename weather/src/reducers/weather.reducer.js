import { FETCH_WEATHER } from '../actions';

let initialState = [];
export default (state = initialState, action) => {
    if (action.type === FETCH_WEATHER) {
        return  [ action.payload.data, ...state ];        
    }
    
    return state;    
}