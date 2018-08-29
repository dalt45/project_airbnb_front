import React,{Component} from 'react';
import CreateHomes from '../components/homes/createHome';

class CreateHome extends Component {
    render(){
        return(
            <div>
                <CreateHomes token={this.props.token}/>
            </div>
        )
    }
}
export default CreateHome;
