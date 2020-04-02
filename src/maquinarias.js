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
            console.log(items);
            
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        //            {JSON.parse(jeison).map(maqui => <Maquina maqui= {maqui}/>)}
        //console.log(this.state)

        return ( <div> </div>)
    }
}

export default Maquinarias;