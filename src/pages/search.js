import React,{Component} from 'react';
import SearchForm from '../components/search/search'
import Results from '../components/search/results';

class CreateHome extends Component {

    handleResults = (results) =>{
        this.setState = ({
            results: results,
        })

    }

    render(){
        return(
            <div>
                <SearchForm handleResults={this.handleResults}/>
                <Results handleResults={this.handleResults}/>
            </div>
        )
    }
}
export default CreateHome;