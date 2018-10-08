import { combineReducers } from 'redux';
import dataListReducer from './reducer_datalist';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  dataList: dataListReducer
});

export default rootReducer;
