import React from 'react';
import nose from './maquina.css'

function Maquina({maqui}){
  
  return (
    <ul>
      <li className= "column">{maqui.ESTADO}</li>
      <li className= "columnX">{maqui.PATENTE}</li>
      <li className= "column">{maqui.MARCA}</li>
      <li className= "columnY">{maqui.MODELO}</li>
      <li className= "column">{maqui.TIPO}</li>
    </ul>
  )
}

export default Maquina;