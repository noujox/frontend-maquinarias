import React from 'react';
import {Cclientes} from '../api'

class  Ccliente extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rut: ''  ,
            nombre: ''  ,
            email:'',
            direccion: '',
        };

    }

    onChange(evento){
        this.setState({
            [evento.target.name] : evento.target.value
        })
    }

    render(){
        const history= this.props.history;
        
        return (
            
            <div>
                <h1 style= {{textAlign: "center"}}>Crear cliente nuevo</h1>

                <div>
                    <input  onChange= {this.onChange.bind(this)}
                        value= {this.state.rut} 
                        name = "rut" 
                        id= "rut" placeholder= "Rut.." 
                        />
                    
                    <input onChange= {this.onChange.bind(this)}
                        value= {this.state.nombre} 
                        name = "nombre" 
                        id= "nombre" placeholder= "Nombre.."
                    />
                    <input onChange= {this.onChange.bind(this)}
                        value= {this.state.email} 
                        name = "email" 
                        id= "email" placeholder= "Email.." 
                    />
                    <input onChange= {this.onChange.bind(this)}
                        value= {this.state.direccion} 
                        name = "direccion" 
                        id= "direccion" placeholder= "Direccion.." 
                    />
                    <button
                        onClick={()=> {
                            Cclientes({
                                rut:this.state.rut,
                                nombre:this.state.nombre,
                                email: this.state.email,
                                direccion: this.state.direccion,
                            });
                            history.push('/clientes');

                        }}>Guardar</button>
                </div>
            </div>
        )
    }
}

export default Ccliente;