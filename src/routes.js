import React from 'react';

import {
    BrowserRouter as Router, 
    Route,
    Switch,
} from 'react-router-dom';

import Home from './Pages/main/index';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </Router>
)