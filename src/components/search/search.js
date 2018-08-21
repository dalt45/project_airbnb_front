import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class SearchForm extends Component {
    state = {
        search: "",
    }

    handleSearch = (event) => {
        console.log(this.state);
        this.setState({
            search: event.target.value
        })
    }
    
    handleClick = (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/";
        axios.get(url, {user: this.state}).then((response) => {
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
                <TextField
                    id="city"
                    value={this.state.search}
                    onChange={this.handleSearch}
                />   
                <Button 
                    color="secondary"
                    variant="contained"
                    onClick={this.handleClick}
                >
                Buscar
                </Button>
            </Card>
        </div>
        )
    }
}
export default SearchForm;