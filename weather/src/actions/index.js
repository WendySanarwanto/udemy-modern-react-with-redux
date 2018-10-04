import axios from 'axios';

const API_KEY = "3031b53c0926c1b063c3593789cf9867";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  console.log(`[DEBUG] - <actions/index/fetchWeather> city: ${city}`);
  const apiUrl = `${API_BASE_URL}?q=${city}&appid=${API_KEY}`;
  console.log(`[DEBUG] - <actions/index/fetchWeather> apiUrl: ${apiUrl}`);
  // TODO: Get the payload from service class
  const resultPromise = axios.get(apiUrl);
  console.log(`[DEBUG] - <actions/index/fetchWeather> resultPromise: \n`, resultPromise);

  return {
    type: FETCH_WEATHER,
    payload: resultPromise
  };
}