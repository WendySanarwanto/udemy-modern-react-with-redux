import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components';
import { PostsIndex, PostsNew } from './containers';

/** 
 * Export component which render <Route> and its children. 
 * These markups define the page navigation routes within our application.
 */ 
export default (    
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="posts" component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />            
    </Route>
);