import React, { Component } from 'react';
import EmailList from './email-list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Email Directory</h3>
        <EmailList />
      </div>
    );
  }
}
