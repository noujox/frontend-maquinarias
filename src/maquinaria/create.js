import React from 'react';

class  Umaquina extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            patente: props.location.state ? props.location.state.patente:''  ,
            marca: '',
            modelo: '',
            precio: '',
            tipo: '',
             

        };

    }

    onChange(evento){
        this.setState({
            [evento.target.name] : evento.target.value
        })
    }

    render(){
        var accion = '';
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
                        <input  
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
                    <button>Guardar</button>
                </div>
            </div>
        )
    }
}

export default Umaquina;