import React from 'react';

function Maquina({maqui}){
  
  return (
    <ul>
      <li>{maqui.ESTADO}</li>
      <li>{maqui.ID}</li>
      <li>{maqui.MARCA}</li>
      <li>{maqui.MODELO}</li>
      <li>{maqui.TIPO}</li>
    </ul>
  )
}

export default Maquina;