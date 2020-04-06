import React from 'react';
import {Redirect,withRouter} from 'react-router-dom'
import nose from './arriendo.css'

class Arriendo extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    const { history} =this.props;
    const maquis = Object.values(this.props.arri.MAQUINARIAS);
    const ops = Object.values(this.props.arri.OPERADORES);

    return (
      
      <div>
        <ul>
          <li className= "column">{this.props.arri.ESTADO}</li>
          <li className= "columnX">{this.props.arri.CLIENTE}</li>
          <li className= "column">{this.props.arri.FECHAINICIO}</li>
          <li className= "columnY">{this.props.arri.FECHATERMINO}</li>
        </ul>
        <ul>
          <li>
            <ul>
              <li>Maquinaria</li>
              {maquis.map(ele => <li key= {ele}>{ele}</li>)}
            </ul>
          </li>
          <li>
            <ul>
              <li>Operador</li>
              {ops.map(ele => <li key= {ele}>{ele}</li>)}
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Arriendo);