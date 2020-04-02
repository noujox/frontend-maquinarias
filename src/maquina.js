import React from 'react';

function maquina({maqui}){
  
  return (
    <ul>
      {
        maqui.map(dato => <li>{dato}</li>)
      }
    </ul>
  )
}

export default maquina;