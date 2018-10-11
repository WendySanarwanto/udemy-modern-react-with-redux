import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import AllPosts from './AllPosts';
import SelectedPosts from './SelectedPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className="App-header">
          App's Main View !
        </h3>
        <AllPosts />
        <SelectedPosts />
      </div>
    );
  }
}

export default App;
