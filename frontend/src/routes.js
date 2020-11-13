import React from 'react';
import { Switch, Route } from 'react-router-dom';

import login from './pages/login';
import landing from './pages/home';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={landing} />
            <Route path="/login" component={login} />
        </Switch>
    );
}

export default Routes;
