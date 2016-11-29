import { FETCH_POSTS, FETCH_POST } from '../actions';

const INITIAL_STATE = { all: [], post: null };

export default (state = INITIAL_STATE, action) => {
    switch ( action.type ){
        case FETCH_POSTS: 
            const fetchPostsState = { ...state, all: action.payload.data }; 
            console.log('[DEBUG-PostsReducer] - fetchPostsState=',fetchPostsState);
            return fetchPostsState;
        case FETCH_POST:
            const fetchPostState = { ...state, post: action.payload.data };
            console.log('[DEBUG-PostsReducer] - fetchPostState=',fetchPostState);
            return fetchPostState;                         
        default:
            return state;
    }
}