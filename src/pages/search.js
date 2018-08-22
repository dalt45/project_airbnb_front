import React,{Component} from 'react';
import SearchForm from '../components/search/search'
import Results from '../components/search/results';

class CreateHome extends Component {
    state={
        homes:[]
    }

    handleHomeSearch = (homes) =>{
        console.log("actualizando")
        console.log("el estado: ", this.state)
        console.log("los homes",homes)
        this.setState({homes});

    }

    render(){
        return(
            <div>
                <SearchForm handleHomeSearch={this.handleHomeSearch} token={this.props.token}/>
                <Results homes={this.state.homes}/>
            </div>
        )
    }
}
export default CreateHome;