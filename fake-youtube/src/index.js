import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

// App is declared as a functional component, because it does not maintain any states.
const App = function() {
  return <Home />;
}

ReactDOM.render(<App />, document.querySelector('#main-view'));
