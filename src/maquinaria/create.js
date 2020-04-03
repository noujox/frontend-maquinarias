import React, {Component} from 'react';

class  Umaquina extends React.Component{
    constructor(){
        super();

    }

    render(){
        return (
            <div>
                <h1>Editar maquinarias</h1>
                <div>
                    <inputGroup placeholder= 'Patente..' />
                </div>
            </div>
        )
    }
}

export default Umaquina;