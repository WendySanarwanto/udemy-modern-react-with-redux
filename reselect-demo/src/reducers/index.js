import { combineReducers } from 'redux';
import PostItemsReducer from './post-items.reducer';
import SelectedItemsReducer from './selected-items.reducer';

const rootReducer = combineReducers({
  postItems: PostItemsReducer,
  selectedPostIds: SelectedItemsReducer
});

export default rootReducer;