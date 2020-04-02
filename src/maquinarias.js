import React, { Component } from 'react';

import { Rmaquinaria } from './api'
import Maquina from './maquina'

class Maquinarias extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            jeison : []
        };
    }
    
    async componentDidMount() {
        try {
            const items = await Rmaquinaria();
            this.setState({jeison: items})
            
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        
        //console.log(this.state)

        return ( <div>{
            this.state.jeison.map(maqui => <Maquina maqui= {maqui}/>)
            } </div>)
    }
}

export default Maquinarias;