import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch(action.type){
    case FETCH_POSTS: 
      console.log(`[DEBUG] - <reducers/reducer_posts> action.payload: \n`, action.payload);
      // Transform action.payload.data from array to object
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}