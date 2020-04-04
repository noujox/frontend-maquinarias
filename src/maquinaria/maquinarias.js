import React, { Component } from 'react';
import { Rmaquinaria } from '../api'
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
            this.setState({jeison: items,
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    async update(){
        try {
            const items = await Rmaquinaria();
            this.setState({jeison: items,
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        this.update();
        //console.log(this.state)
        const { history} =this.props;

        return ( <div>
            <h1 style= {{ textAlign: "center" }}>Maquinarias</h1>
            <div style= {{paddingBottom:'10px'}}>
                <button onClick= {()=> history.push('/maquinarias/upcrate',{accion:'create' })}>Agregar</button>
            </div>
            {
            this.state.jeison.map(maqui => <Maquina key={maqui.PATENTE} maqui= {maqui} update={this.update} />)
            } </div>)
    }
}

export default Maquinarias;