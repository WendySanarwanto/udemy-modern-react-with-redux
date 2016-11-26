import { combineReducers } from 'redux';
import BookReducer from './books_reducer';
import ActiveBookReducer from './active_book_reducer';

const rootReducer = combineReducers({
  activeBook: ActiveBookReducer,
  books: BookReducer
});

export default rootReducer;
