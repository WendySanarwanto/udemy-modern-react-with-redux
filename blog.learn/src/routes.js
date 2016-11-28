import React from 'react';
//1. We import Route & IndexRoute objects from react-router library.
// Route is an object to define & match between URL and the component.
import { Route, IndexRoute } from 'react-router';

import { App } from './components';
import { PostsIndex, PostsNew, PostsShow } from './containers';

// 2. Define a rule to map "/" URL path to render App Component
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="posts" component={PostsIndex} />    
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow}></Route>
    </Route>
);