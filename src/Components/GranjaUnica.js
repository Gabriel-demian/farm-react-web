import React, { Component }  from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const styles = {
    imgProducto:{
        width:"150px"
    },
    title:{
        fontSize:"10px"
    }
}

class GranjaUnica extends Component{
    constructor(props){
        super(props)
        this.state={
            mensaje:""
        }
    }
    handleClick = ()=>{
        this.setState({
            mensaje:"TE DIJE Q NO CARAJO!"
        })
    }
    render(){
        return (
            <Card style={{ width: '18rem' }} >
            <Card.Body>
                <Card.Title>
                    Nombre: {this.props.data.farmName} 
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                    id: {this.props.data.id}
                </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted">
                    Gallinas Compradas: {this.props.data.chickenBought}
                </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted">
                    Gallinas Vendidas: {this.props.data.chickenSold}
                </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted">
                    Gallinas Compradas: {this.props.data.eggBought}
                </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted">
                    Gallinas Vendidas: {this.props.data.eggSold}
                </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted">
                   Ganancias: ${this.props.data.income}
                </Card.Subtitle>
                
                <Card.Subtitle className="mb-2 text-muted">
                   Gastos: ${this.props.data.expenses}
                </Card.Subtitle>

                <Button variant="primary" onClick={this.handleClick}>
                    DON'T PUSH ME!
                </Button>
               
                {
                    this.props.buttons &&
                    <Button variant="outline-info">
                        <Link to={'/producto/'+this.props.id}>
                            Ver Detalles
                        </Link>
                    </Button>
                }
                
                {this.state.mensaje}
            </Card.Body>
           </Card>
        )
    }
}
export default GranjaUnica;