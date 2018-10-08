import { FETCH_DATALIST } from '../actions';

export default function(state = {}, action){
  console.log(`[DEBUG] - <reducers/reducer_datalist> state: \n`, state);
  console.log(`[DEBUG] - <reducers/reducer_datalist> action: \n`, action);

  switch(action.type){
    case FETCH_DATALIST: 
      return action.payload;
    default:
      return state;
  }
}