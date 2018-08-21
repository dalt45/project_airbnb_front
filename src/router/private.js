import React from 'react';
import { Route, Redirect} from 'react-router-dom';

//stateless component, no maneja lógica del concepto de funcion pura que no altera o necesita parametros fuera 
// de su scope.
//No tienen estado / solo renderean vista / reciben props
//Descomponiendo un componente

const PrivateRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        // if fancy operador ternario
        isLoggedIn ? (
            <div>
                <Component {...rest} {...props} />
            </div>
        ) : (
            <Redirect to="/signup"/>
        )
    )}/>
    //lo que esta dentro del parentesis es lo que vas a retornar

)

export default PrivateRoute;