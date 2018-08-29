import React,{Component} from 'react';
import {Router, Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import CreateHomes from '../pages/createHome';
import Home from '../pages/home';
import MakeReservation from '../pages/makeReservation';
import SignUp from '../pages/signup';
import Search from '../pages/search';
import Login from '../pages/login';
import PrivateRoute from './private';
import PublicRoute from './public';

class AppRouter extends Component {

    state = {
        isLoggedIn: false,
        token:""
    }

    handleUser = (status, token) => {
        this.setState({
            isLoggedIn: status,
            token:token,
        })
    }

    render() {
        return(
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/signup">SignUp</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/reservation">Make a Reservation</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                        <li>
                            <Link to="/create">Create</Link>
                        </li>
                    </ul>
                    <Switch>        
                        <Route path="/" component={Home} exact={true}/>
                        <PrivateRoute path="/create" component={CreateHomes} isLoggedIn={this.state.isLoggedIn} token={this.state.token}/>
                        <PublicRoute path="/signup" component={SignUp} handleUser={this.handleUser} isLoggedIn={this.state.isLoggedIn}/>
                        <PublicRoute path="/login" component={Login} handleUser={this.handleUser} isLoggedIn={this.state.isLoggedIn}/>
                        <PrivateRoute path="/reservation" component={MakeReservation} isLoggedIn={this.state.isLoggedIn}/>
                        <PrivateRoute path="/search" component={Search} isLoggedIn={this.state.isLoggedIn} token={this.state.token}/>


                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;
//High order component de logica muy pesada como props recibe otro componente de react u 
//otras etiquetas html