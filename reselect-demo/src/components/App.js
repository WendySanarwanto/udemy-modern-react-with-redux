import React, { Component } from 'react';
// import logo from './logo.svg';
import AllPosts from './AllPosts';
import SelectedPosts from './SelectedPosts';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SelectedPosts />
        <hr/>
        <AllPosts />
      </div>
    );
  }
}

export default App;
