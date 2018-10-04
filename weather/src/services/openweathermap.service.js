const API_KEY = "b6907d289e10d714a6e88b30761fae22";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

export default class OpenWeatherMapService {
  async doGetWeatherForcast(city){
    const apiUrl = `${API_BASE_URL}?q=${city}&appid=${API_KEY}`;
    
    // TODO: Implement this
    return result;
  }
}