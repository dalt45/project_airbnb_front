import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class SignUpForm extends Component {
    
    state = {
        email: "",
        name:"",
        last_name:"",
        password:"",
        date:""
    }

    handleEmail = (event) => {
        console.log(this.state);
        this.setState({
            email: event.target.value
        })
    }
    handleName = (event) => {
        console.log(this.state);
        this.setState({
            name: event.target.value
        })
    }

    handleLastName = (event) => {
        console.log(this.state);
        this.setState({
            last_name: event.target.value
        })
    }


    handlePassword = (event) => {
        console.log(this.state);
        this.setState({
            password: event.target.value
        })
    }

    handleDate = (event) => {
        console.log(this.state);
        this.setState({
            date: event.target.value
        })
    }
    handleClick = (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/users/signup";
        axios.post(url, {user: this.state}).then((response) => {
            console.log(response);
            this.props.handleUser(true,response.data.token);
        }).catch((error) => {
            console.log(error);
        })
    }


    render(){
        return(
            <div>
                <Card>
                    <p>Registrate en Airbnb Clon</p> 
                    <TextField
                        id="email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                    />   
                    <TextField 
                        id="name"
                        value={this.state.name}
                        onChange={this.handleName}
                    />   
                    <TextField 
                        id="last_name"
                        value={this.state.last_name}
                        onChange={this.handleLastName}
                    />   
                    <TextField 
                        id="password"
                        value={this.state.password}
                        onChange={this.handlePassword}
                    />  
                    <TextField 
                        id="date"
                        type="date"
                        value={this.state.date}
                        onChange={this.handleDate}
                        />  
                    <Button 
                        color="secondary"
                        variant="contained"
                        onClick={this.handleClick}
                    >
                    Registrate
                    </Button>
                </Card>
            </div>
        )
    }
}

export default SignUpForm;