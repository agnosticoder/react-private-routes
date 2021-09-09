import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import Signin from './Signin';

const App = (props) => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact={true} path="/" component={Dashboard} />
                <Route path="/signin" exact component={Signin} />
            </Switch>
        </Router>
    )
}

export default App
