import React from 'react';
import {Redirect,withRouter} from 'react-router-dom'
import nose from './maquina.css'
import {Xmaquinaria } from '../api'

class Maquina extends React.Component{
  constructor(props){
    super(props);
    
    

  }
  remove(){
    Xmaquinaria(this.props.maqui.PATENTE);
    this.props.update.bind(this);
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
        <li><button onClick= {()=> history.push('/maquinarias/upcrate',{maqui: this.props.maqui ,accion:'update' })}>Editar</button></li>
        <li><button onClick= {()=> {this.remove()} }>Eliminar</button></li>
      </ul>
    )
  }
}

export default withRouter(Maquina);