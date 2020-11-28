import React, { Component } from "react";
//import {getProductos} from "../services/ProductosService"
//import firebase from "../Config/firebase"


class Home extends Component{
    constructor(){
        super()
        this.state={
            productos:[],
            loading:true
        }
    }
    async componentWillMount(){
        console.log("componentDidMount")
        /* 
        firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            this.setState({
                productos:querySnapshot.docs,
                loading:false
            })
        })
        */
       /* Se comenta el uso de Axios 
        let result = await getProductos();

        console.log("result", result);
        if(result.data.length>0){
            this.setState({
                productos:result.data,
                loading:false
            })
        }
        //En caso de volver a usar utilizar esta linea en el render
        {this.state.productos.map(producto=><ProductoUnico key={producto.id} data={producto} buttons={true}/>)}
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
                <div>
                    Página en construcción!!
                </div>
            )
        } 
    }
}
export default Home;