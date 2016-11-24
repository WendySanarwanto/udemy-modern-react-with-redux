import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <span>React simple starter</span>
        {this.props.children}
      </div>
    );
  }
}
