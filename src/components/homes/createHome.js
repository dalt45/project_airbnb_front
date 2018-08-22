import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class SignUpForm extends Component {
    
    state = {
        title: "",
        address:"",
        capacity:"",
        type:"",
        price:"",
        description:"",
        services:[],
        beds:"",
        datesNotAvailable:"",
        city:"",
    }

    handleTitle = (event) => {
        console.log(this.state);
        this.setState({
            title: event.target.value
        })
    }
    handleAdress = (event) => {
        console.log(this.state);
        this.setState({
            address: event.target.value
        })
    }

    handleCapacity = (event) => {
        console.log(this.state);
        this.setState({
            capacity: event.target.value
        })
    }

    handleType = (event) => {
        console.log(this.state);
        this.setState({
            type: event.target.value
        })
    }

    handlePrice = (event) => {
        console.log(this.state);
        this.setState({
            price: event.target.value
        })
    }
    handleDescription= (event) => {
        console.log(this.state);
        this.setState({
            description: event.target.value
        })
    }
   // To do : Pending handle services, to see if it will be Selection Controls
   handleBeds= (event) => {
    console.log(this.state);
    this.setState({
        beds: event.target.value
    })
   //To do: Pending handle dates (calendar)
   handleCity= (event) => {
    console.log(this.state);
    this.setState({
        city: event.target.value
    })


    handleClick = (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/users/signup";
        axios.post(url, {user: this.state}).then((response) => {
            console.log(response);
            this.props.handleUser(true,response.token);
        }).catch((error) => {
            console.log(error);
        })
    }


    render(){
        return(
            <div>
                <Card>
                    <p>Registrate tu casa</p> 
                    <TextField
                        id="address"
                        value={this.state.address}
                        onChange={this.handleAdress}
                    />   
                    <TextField 
                        id="capacity"
                        value={this.state.capacity}
                        onChange={this.handleCapacity}
                    />   
                    <TextField 
                        id="type"
                        value={this.state.type}
                        onChange={this.handleType}
                    />   
                     <TextField 
                        id="price"
                        value={this.state.price}
                        onChange={this.handlePrice}
                    />   
                    <TextField 
                        id="description"
                        value={this.state.description}
                        onChange={this.handleDescription}
                    />  
                    <TextField 
                        id="beds"
                        value={this.state.beds}
                        onChange={this.handleBeds}
                        />  
                     <TextField 
                        id="city"
                        value={this.state.city}
                        onChange={this.handleCity}
                        />  
                    <Button 
                        color="secondary"
                        variant="contained"
                        onClick={this.handleClick}
                    >
                    Submit
                    </Button>
                </Card>
                
            </div>
        )
    }
}

export default SignUpForm;