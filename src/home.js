import React from 'react';


class Home extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    const { history} =this.props;
    
    return (
      <div>
        <button onClick={()=> history.push('/maquinarias')} >Maquinarias</button>
        <button onClick={()=> history.push('/operadores')} >Operadores</button>
        <button onClick={()=> history.push('/clientes')} >Clientes</button>
        <button onClick={()=> history.push('/arriendos')} >Arriendos</button>
      </div>
    )
  }
}

export default Home;