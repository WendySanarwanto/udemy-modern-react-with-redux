import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux'
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData){
    if (cityData) {
      const { coord, id } = cityData.city;
      const { lon, lat} = coord;
      const temps = cityData.list.map(weather => weather.main.temp);
      const tempsInCelcius = _.map(temps, temp => temp - 273);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      
      // console.log(`[DEBUG] - <WeatherList.renderWeather> temps: \n`, temps);
      console.log(`[DEBUG] - <WeatherList.renderWeather> lon: ${lon}, lat: ${lat}`);

      return (
        <tr key={id}>
          <td><GoogleMap lon={lon} lat={lat} /></td>
          {/* <td><Chart data={temps} color="orange" units="K"/></td> */}
          <td><Chart data={tempsInCelcius} color="orange" units="C"/></td>
          <td><Chart data={pressures} color="green" units="hPa"/></td>
          <td><Chart data={humidities} color="black" units="%"/></td>
        </tr>
      );
    }
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
};

function mapStateToProps({weather}) {
  return {
    weather
  }
}

export default connect(mapStateToProps)(WeatherList);