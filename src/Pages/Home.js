import React, { Component } from "react";
import GranjaUnica from "../Components/GranjaUnica";
import CardColumns from 'react-bootstrap/CardColumns';
import {getFarms} from "../Services/FarmService";
//import firebase from "../Config/firebase"


class Home extends Component{
    constructor(){
        super()
        this.state={
            farms:[],
            loading:true
        }
    }
    async componentWillMount(){
        console.log("componentDidMount")
        /* 
        ****************************
        *******FIREBASE
        ****************************
        Queda comentado el código para obtener productos de la base de firebase 
        firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            this.setState({
                productos:querySnapshot.docs,
                loading:false
            })
        })

        En caso de volver a tomar productos de firebase en Render utilizar lo siguiente como ejemplo 
         <CardColumns>
                    {this.state.productos.map(producto=><ProductoUnico key={producto.id} id={producto.id} data={producto.data()} buttons={true}/>)}
        </CardColumns>
        */

         
       /*****************************
       *******AXIOS
       *****************************/

        let result = await getFarms();

        console.log("result", result);
        if(result.data.length>0){
            this.setState({
                farms:result.data,
                loading:false
            })
        }
        /*
        //En caso de volver a usar utilizar esta linea en el render
        {this.state.productos.map(producto=><ProductoUnico key={producto.id} data={producto} buttons={true}/>)}


        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
            <h1> TENGO GRANJAS!! </h1>
        </div>
        */
    }
    render(){
        if(this.state.loading){
            return(
                <div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
                        <h1> Contenido en construcción </h1>
                    </div>
                </div>
            )
        }else{
            return (
                <CardColumns>
                    <div>
                        {this.state.farms.map(farm=><GranjaUnica key={farm.id} data={farm} buttons={true}/>)}
                    </div>
                </CardColumns>
            )
        } 
    }
}
export default Home;