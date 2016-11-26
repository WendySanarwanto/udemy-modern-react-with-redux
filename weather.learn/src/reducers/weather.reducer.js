import { FETCH_WEATHER } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
    // Taking current result list and concatenate it with incoming payload result.
    if (action.type == FETCH_WEATHER){ 
        // Proper practice with state in React & Redux : Never set a state equal to something.
        // Because, we don't ever manipulate state directly 

        // Example: 
        // return state.push(action.payload.data); // -> We changed current state array, mutating it by calling push - not good practice

        // Instead, we shall return a completely a new state.      
        // We need to return a new array entirely which include all of prior data & new data. 
        //return state.concat([action.payload.data]); // -> concat does not change existing array, it concats 2 arrays into a new array.
        return [ action.payload.data, ...state ]; // Do same thing as in prior line , in ES 6 flavor
    }

    return state;
}