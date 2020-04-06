import React, { Component } from 'react';
import { Rclientes } from '../api'
import Cliente from './cliente'

class Clientes extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            jeison : []
        };
    }
    
    async componentDidMount() {
        try {
            const items = await Rclientes();
            this.setState({jeison: items,
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    async update(){
        try {
            const items = await Rclientes();
            this.setState({jeison: items,
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        this.update()
        //console.log(this.state)
        const { history} =this.props;

        return ( <div>
            <h1 style= {{ textAlign: "center" }}>Clientes</h1>
            <div style= {{paddingBottom:'10px'}}>
                <button onClick= {()=> history.push('/clientes/create')}>Agregar</button>
            </div>
            {
            this.state.jeison.map(cli => <Cliente key={cli.RUT} cli= {cli} />)
            } </div>)
    }
}

export default Clientes;