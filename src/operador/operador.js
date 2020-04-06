import React from 'react';
import {Redirect,withRouter} from 'react-router-dom'

class Cliente extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    const { history} =this.props;
    

    return (
      <ul>
        <li className= "column">{this.props.cli.RUT}</li>
        <li className= "columnX">{this.props.cli.NOMBRE}</li>
        <li className= "column">{this.props.cli.EMAIL}</li>
        <li className= "columnY">{this.props.cli.DIRECCION}</li>
        <li className= "column">{this.props.cli.ESTADO}</li>
      </ul>
    )
  }
}

export default withRouter(Cliente);