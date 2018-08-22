import React,{Component} from 'react';
import LoginForm from '../components/login/form'

class Login extends Component {
    render(){ 
        return (
            <div>
                <LoginForm handleUser={this.props.handleUser}/>
            </div>
        )
    }
}

export default Login;
