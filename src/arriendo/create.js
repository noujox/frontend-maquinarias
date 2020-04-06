import React from 'react';
import {Carriendo} from '../api'

class  Carriendo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            patente: props.location.state.maqui ? props.location.state.maqui.PATENTE:''  ,
            marca: props.location.state.maqui ? props.location.state.maqui.MARCA : ''  ,
            modelo: props.location.state.maqui ? props.location.state.maqui.MODELO : '',
            precio: props.location.state.maqui ? props.location.state.maqui.PRECIO : '',
            tipo: props.location.state.maqui ? props.location.state.maqui.TIPO : '',
             
        };

    }

    onChange(evento){
        this.setState({
            [evento.target.name] : evento.target.value
        })
    }

    render(){
        var accion = '';
        const history= this.props.history;
        this.props.location.state ?  accion= this.props.location.state.accion : accion = 'create' ;
        
        return (
            
            <div>
                <h1 style= {{textAlign: "center"}}>{accion == "update"? "Editar Maquinaria":"Crear Maquinaria"}</h1>

                <div>
                    {accion == "update"? 
                        <input disabled 
                        value= {this.state.patente} 
                        name = "patente" 
                        id= "patente" placeholder= "Patente.." 
                    />:
                        <input  onChange= {this.onChange.bind(this)}
                        value= {this.state.patente} 
                        name = "patente" 
                        id= "patente" placeholder= "Patente.." 
                        />
                    }
                    
                    <input onChange= {this.onChange.bind(this)}
                        value= {this.state.marca} 
                        name = "marca" 
                        id= "marca" placeholder= "Marca.."
                    />
                    <input onChange= {this.onChange.bind(this)}
                        value= {this.state.modelo} 
                        name = "modelo" 
                        id= "modelo" placeholder= "Modelo.." 
                    />
                    <input onChange= {this.onChange.bind(this)}
                        value= {this.state.precio} 
                        name = "precio" 
                        id= "precio" placeholder= "Precio.." 
                    />
                    <input onChange= {this.onChange.bind(this)}
                        value= {this.state.tipo} 
                        name = "tipo" 
                        id= "tipo" placeholder= "Tipo.." 
                    />
                    <button
                        onClick={()=> {
                            if(accion == "update"){
                                Umaquinaria({patente:this.state.patente,
                                    marca:this.state.marca,
                                    modelo: this.state.modelo,
                                    precio: this.state.precio,
                                    tipo: this.state.tipo,
                                });
                                history.push('/maquinarias');
                            }else{
                                Cmaquinaria({
                                    patente:this.state.patente,
                                    marca:this.state.marca,
                                    modelo: this.state.modelo,
                                    precio: this.state.precio,
                                    tipo: this.state.tipo
                                });
                                history.push('/maquinarias');
                            }

                        }}>Guardar</button>
                </div>
            </div>
        )
    }
}

export default Carriendo;