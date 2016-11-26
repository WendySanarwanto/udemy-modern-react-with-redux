
import axios from 'axios';

const FETCH_WEATHER = '';
const API_KEY = '3031b53c0926c1b063c3593789cf9867';
const MEASUREMENT_UNIT = 'metric';

function fetchWeather(city){
    const targetUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=${MEASUREMENT_UNIT}`;
    const request = axios.get(targetUrl);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export { FETCH_WEATHER, fetchWeather };