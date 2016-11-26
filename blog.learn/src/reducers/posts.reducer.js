import { FETCH_POSTS } from '../actions';

const INITIAL_STATE = { all: [], post: null };

export default (state = INITIAL_STATE, action) => {
    switch ( action.type ){
        case FETCH_POSTS: 
            const fetchPostsState = { ...state, all: action.payload.data }; 
            console.log('[DEBUG-PostsReducer] - fetchPostsState=',fetchPostsState);
            return fetchPostsState;
        default:
            return state;
    }
}