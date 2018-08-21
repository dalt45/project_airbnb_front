import React,{Component} from 'react';
import SignupForm from '../components/signup/form'

class Signup extends Component {
    render(){
        return (
            <div>
                <SignupForm handleUser={this.props.handleUser}/>
            </div>

        )
    }
}

export default Signup;
