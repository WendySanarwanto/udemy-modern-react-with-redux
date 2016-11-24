import React from 'react';
//1. We import Route & IndexRoute objects from react-router library.
// Route is an object to define & match between URL and the component.
import { Route, IndexRoute } from 'react-router';

import { App, Greet } from './components';

// 2. Define a rule to map "/" URL path to render App Component
export default (
    <Route path="/" component={App}>
        <Route path="greet" component={Greet}/>
    </Route>
)