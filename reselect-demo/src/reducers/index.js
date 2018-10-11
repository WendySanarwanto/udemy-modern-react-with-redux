import { combineReducers } from 'redux';
import PostItemsReducer from './post-items.reducer';

const rootReducer = combineReducers({
  postItems: PostItemsReducer
});

export default rootReducer;