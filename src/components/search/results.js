import React,{Component} from 'react';

class Results extends Component {


    render(){
        console.log("los homes", this.props.homes);
        return(
            <div>
                Soy los resultados
            </div>
        )
    }
}
export default Results;