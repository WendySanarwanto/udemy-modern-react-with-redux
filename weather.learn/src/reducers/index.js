import { combineReducers } from 'redux';
import WeatherReducer from './weather.reducer';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
