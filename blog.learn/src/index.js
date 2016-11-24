import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// 1. Import Router & browserHistory objects from react-router library.
// Router is the object that decides  what React component that the applicaiton needs to render whenever the browser's  url is changed.'
// browserHistory is an object that tells React Router how to interpret changes to be URL. Other objects: hashHistory, memoryHistory. 
import { Router, browserHistory } from 'react-router';

// 2. We comment this , because are going to replace App component with Router object and configure a default route for the App component in routes.js file.
// import App from './components/app';
import reducers from './reducers';

// 3. Import routes object from routes.js file then assign the routes object to Router's routes property
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}></Router>
  </Provider>
  , document.querySelector('.container'));
