import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import HelloWorldApp from './HelloWorldApp';
import Greeter from './Greeter';
import Index from './Index';
const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);
export default routes;
