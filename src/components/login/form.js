import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class LoginForm extends Component {
    
    state = {
        email: "",
        password:""
    }

    validateEmail = (mail) => {
        var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return re.test(mail);
    }

    handleEmail = (event) => {
        console.log(this.state);
        this.setState({
            email: event.target.value
        })
    }
    handlePassword = (event) => {
        console.log(this.state);
        this.setState({
            password: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/users/login";
        if(!this.validateEmail(this.state.email)) console.log("No es email válido")
        else{
        axios.post(url, {user:this.state}).then((response) => {
            console.log(response);
            this.props.handleUser(true,response.data.token);
        }).catch((error) => {
            console.log(error);
        })
        }
    }

    render(){
        return(
            <div>
                <Card>
                    <p>Login en AirBnb Clon.</p> 
                    <TextField
                        id="email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                    />   
                    <TextField 
                        id="password"
                        value={this.state.password}
                        onChange={this.handlePassword}
                        type="password"
                    />  
                    <Button 
                        color="secondary"
                        variant="contained"
                        onClick={this.handleClick}
                    >
                    Log In
                    </Button>
                </Card>
            </div>
        )
    }
}

export default LoginForm;