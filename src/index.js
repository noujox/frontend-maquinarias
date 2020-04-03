import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import Maquinarias from './maquinaria/maquinarias'
import Umaquina from './maquinaria/create'


const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Route exact path= "/maquinarias" component = {Maquinarias}/>
            <Route path= "/maquinarias/update" component = {Umaquina}/>
        </React.Fragment>
    </BrowserRouter>
    
);



ReactDOM.render(<App />, document.getElementById('root'));