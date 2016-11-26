import { combineReducers } from 'redux';
// 1. Import redux-form's reducer. We will combine it into the rootReducer
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './posts.reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer // 2. Combine the form reducer into the rootReducer
});

export default rootReducer;
