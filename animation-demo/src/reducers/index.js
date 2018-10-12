import { combineReducers } from 'redux';
import ItemsReducer from './items.reducer';

const rootReducer = combineReducers({
  items: ItemsReducer
});

export default rootReducer;
