import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import Maquinarias from './maquinaria/maquinarias'
import Umaquina from './maquinaria/create'
import Arriendos from './arriendo/arriendos';
import Clientes from './cliente/clientes';
import Ccliente from './cliente/create';
import Operadores from './operador/operadores'
import Coperador from './operador/create'
import Home from './home'



const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Route exact path= "/" component = {Home}/>
            
            <Route exact path= "/maquinarias" component = {Maquinarias}/>
            <Route path= "/maquinarias/upcrate" component = {Umaquina}/>

            <Route exact path= "/arriendos" component = {Arriendos}/>
            <Route path= "/arriendos/create" component = {Umaquina}/>

            <Route exact path= "/clientes" component = {Clientes}/>
            <Route path= "/clientes/create" component = {Ccliente}/>
            
            <Route exact path= "/operadores" component = {Operadores}/>
            <Route path= "/operadores/create" component = {Coperador}/>

        </React.Fragment>
    </BrowserRouter>
    
);



ReactDOM.render(<App />, document.getElementById('root'));