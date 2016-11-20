import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ChartLine, CityMap } from '../components';
import _ from 'lodash';
import uuid from 'uuid';

import WeatherReducer from '../reducers/weather.reducer'; 

class WeatherList extends Component {
    renderOutputChartlines(weather){
        console.log('[DEBUG-WeatherList] - cityWeather: ', weather);
        const city = weather.city;
        const cityName = city.name;
        const cityLocation = city.coord; 
        const tempList = weather.list.map(forecast => forecast.main.temp);
        const humidityList = weather.list.map(forecast => forecast.main.humidity);
        const pressureList = weather.list.map(forecast => forecast.main.pressure);
        const calcMean = (dataList) =>{
            return _.round(_.mean(dataList));
        };
        const forecastDataList = [
            { avg: calcMean(tempList), units: 'C', chartLineColor: 'red', data: tempList }, 
            { avg: calcMean(pressureList), units: 'hPa', chartLineColor: 'green', data: pressureList },
            { avg: calcMean(humidityList), units: '%', chartLineColor: 'blue', data: humidityList },
        ];
        const chartWidth = 250;
        const chartHeight = 210;

        return (
            <tr key={uuid.v1()}>
                <td>
                    <CityMap lat={cityLocation.lat} lon={cityLocation.lon}/>
                </td>
                {forecastDataList.map(forecastData=> (
                    <td key={forecastData.units}>
                        <ChartLine data={forecastData.data}
                                   color={forecastData.chartLineColor}
                                   width={chartWidth}
                                   height={chartHeight}
                                   title={ `${forecastData.avg} ${forecastData.units}` }/>
                    </td>
                ))}
            </tr>
        );
    }
    
    render () {
        return (
            <div className="weather-list">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th><span>City</span></th>
                            <th><span>Temperature (C)</span></th>
                            <th><span>Pressure (hPa)</span></th>
                            <th><span>Humidity (%)</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderOutputChartlines)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = ({ weather }) => {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);