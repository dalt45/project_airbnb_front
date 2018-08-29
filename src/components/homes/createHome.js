import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MyMapComponent from '../maps/homeMap';



class CreateHomes extends Component {
    
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
        geoSearchArray:"",
        token:""
    }

    makeGeoArray = () => {
        let geoArray = this.state.address.split(" ");
        geoArray.push(this.state.city);
        this.setState({geoSearchArray:geoArray})
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
    }

   //To do: Pending handle dates (calendar)
   handleCity= (event) => {
    console.log(this.state);
    this.setState({
        city: event.target.value
    })
    
    }

    handleClick = (event) => {
        const url = "http://localhost:3000/homes";
        const options = {
            method: 'POST',
            headers: {token: this.props.token },
            data: {home: this.state},
            url
          };
        axios(options).then((response) => {
            console.log(response);
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
                        id="tittle"
                        value={this.state.title}
                        onChange={this.handleTitle}
                    />   
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
                    >Submit
                    </Button>
                </Card>
                <MyMapComponent isMarkerShown={true}/>
            </div>
        )
    }
}

export default CreateHomes;