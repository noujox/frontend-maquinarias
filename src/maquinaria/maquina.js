import React from 'react';
import {Redirect,withRouter} from 'react-router-dom'
import nose from './maquina.css'

class Maquina extends React.Component{
  constructor(props){
    super(props);
    
    

  }
  
  
  render(){
    const { history} =this.props;
    
    return (

      <ul>
        <li className= "column">{this.props.maqui.ESTADO}</li>
        <li className= "columnX">{this.props.maqui.PATENTE}</li>
        <li className= "column">{this.props.maqui.MARCA}</li>
        <li className= "columnY">{this.props.maqui.MODELO}</li>
        <li className= "column">{this.props.maqui.TIPO}</li>
        <li><button onClick= {()=> history.push('/maquinarias/upcrate',{patente: this.props.maqui.PATENTE ,accion:'update' })}>Editar</button></li>
      </ul>
    )
  }
}

export default withRouter(Maquina);