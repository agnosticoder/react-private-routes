import React from 'react'
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}) {
    return (
        <div>
            <Route {...rest}>
                {/* Based on the conditon we can render different routes */}
                {true ? <Redirect to="/signin"/>: <Component />}
            </Route>
        </div>
    )
}

export default PrivateRoute
