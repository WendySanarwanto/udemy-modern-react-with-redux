import React, { Component } from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

import { addItem } from '../actions';
import ItemsList from './items-list';
import './app.css';

class App extends Component {
  onAddClicked() {
    const { addItem } = this.props;
    const newItem = { title: faker.lorem.sentence() }
    // console.log(`[DEBUG] - <App.onAddClicked> newItem: \n`, newItem);
    addItem(newItem);
  }

  render() {
    return (
      <div className="app container">
        <button className="btn btn-danger" onClick={this.onAddClicked.bind(this)}>Add</button>
        <ItemsList />
      </div>
    );
  }
}

export default connect (null, {addItem})(App);
