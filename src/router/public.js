import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const PublicRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isLoggedIn ? (
            <Redirect to="/" />
        ) : (
            <div>
                <Component {...rest} {...props} />
            </div>
        )
    )}/>
)

export default PublicRoute;