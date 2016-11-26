import React, {Component} from 'react';
import {connect} from 'react-redux';

import { CityMap, LineChart } from '../components';

class WeatherList extends Component {
    renderWeatherData(weatherData){
        const city = weatherData.city;
        const cityName = city.name;
        const { lat, lon } = city.coord;
        const temperatureList = weatherData.list.map(weather=> weather.main.temp );
        const pressureList = weatherData.list.map(weather=> weather.main.pressure );
        const humidityList = weatherData.list.map(weather=> weather.main.humidity );

        const dataChartsToRender = [{ color: "red", data: temperatureList, units: "C" }, 
                                    { color: "blue", data: pressureList, units: "hPa" },
                                    { color: "green", data: humidityList, units: "%" }];

        const chartWidth = 240;
        const chartHeight = 180;

        return (
            <tr key={cityName}>
                <td><CityMap lat={lat} lon={lon} /></td>
                {dataChartsToRender.map(dataChart=>(
                    <td key={dataChart.color}>
                        <LineChart height={chartHeight} width={chartWidth} 
                                data={dataChart.data} color={dataChart.color} 
                                units={dataChart.units}></LineChart>
                    </td>                    
                ))}
            </tr>
        );
    }

    render() {
        return (
            <div className="weather-list">
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
                        {this.props.weather.map(this.renderWeatherData)} 
                    </tbody>
                </table>                
            </div>
        );
    }
}

function mapStateToProps({weather}){
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);