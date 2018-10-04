import React, { Component} from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    const {lat, lon} = this.props;
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: lat,
        lng: lon
      }
    });
  }

  render() {
    // this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
