import FETCH_POSTS from '../actions';

const initialState = { all: [], post: null }
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        default:
            return state
    }
}