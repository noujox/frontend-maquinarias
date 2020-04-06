import React, { Component } from 'react';
import { Rarriendo } from '../api'
import Arriendo from './arriendo'

class Arriendos extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            jeison : []
        };
    }
    
    async componentDidMount() {
        try {
            const items = await Rarriendo();
            this.setState({jeison: items,
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    async update(){
        try {
            const items = await Rarriendo();
            this.setState({jeison: items,
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        
        //console.log(this.state)
        const { history} =this.props;

        return ( <div>
            <h1 style= {{ textAlign: "center" }}>Arriendos</h1>
            <div style= {{paddingBottom:'10px'}}>
                <button onClick= {()=> history.push('/arriendos/upcrate',{accion:'create' })}>Agregar</button>
            </div>
            {
            this.state.jeison.map(arri => <Arriendo key={arri.ID} arri= {arri} />)
            } </div>)
    }
}

export default Arriendos;