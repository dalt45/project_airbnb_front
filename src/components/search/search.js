import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class SearchForm extends Component {
    state = {
        search: "",
        token:"",
    }

    handleSearch = (event) => {
        console.log(this.state);
        this.setState({
            search: event.target.value
        })
    }
    
    handleClick = (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/homes/search?city="+this.state.search;
        axios.get(url,{headers:{token:this.props.token}}).then((response) => {
            console.log(response);
            this.props.handleHomeSearch(response.data.homes)
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