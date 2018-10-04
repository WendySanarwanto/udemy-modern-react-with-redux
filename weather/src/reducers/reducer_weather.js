import {FETCH_WEATHER} from '../actions';

export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
      console.log(`[DEBUG] - <reducers/reducer_weather> action.payload.data: \n`, action.payload.data);
      return action.payload ? [ action.payload.data, ...state ] : null;
  }
  return state;
}