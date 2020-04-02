import React, {Component} from 'react';
import Jeison from './response.json'
import {Rmaquinaria} from './api'
import Maquina from './maquina'

class Maquinarias extends React.Component{
    /*
    constructor(props){
        super(props);

         this.state= {
            items: [],
            
        }; 
    }
    */
   /*  async componentDidMount(){
        try {
            const items = await Rmaquinaria();
        } catch (error) {
            console.log(error.message);
        }
    } */

    render (){
        //            {JSON.parse(jeison).map(maqui => <Maquina maqui= {maqui}/>)}
        

        return(
        <div>
            {Jeison.result.map((maqui) => {console.log(maqui.content)})}
            hola
        </div>
        )
    }
}

export default Maquinarias;