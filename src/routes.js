import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home/index';
import Create from './pages/create/index';
import Edit from './pages/edit/index'

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={Create} exact />
                <Route path="/edit/:id" component={Edit} exact />
            </Switch>
        </BrowserRouter>
    );
};