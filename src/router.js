import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Form from './components/form';
import Main from './components/main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/store" component={Form}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;