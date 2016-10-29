import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#main-view'));