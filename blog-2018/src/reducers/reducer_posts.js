import _ from 'lodash';
import { DELETE_POST, FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  console.log(`[DEBUG] - <reducers/reducer_posts> action.payload: \n`, action.payload);

  switch(action.type){
    case FETCH_POSTS: 
      // Transform action.payload.data from array to object
      return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = {...state};
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data};
    case DELETE_POST:
      // Look at the state object, if the state contain deleted id, drop it
      return _.omit(state, action.payload);
    default:
      return state;
  }
}