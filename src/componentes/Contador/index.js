import React, {Component} from "react";
import {Button} from "reactstrap";
import "./contador.css"

class Contador extends Component {
    
    state = {
        numero: 0
      }
  
      
  
    aumentar = () => {
        this.setState({numero: this.state.numero + 1})
    }
  
    diminuir = () => {
        this.setState({numero: this.state.numero - 1})
        if (this.state.numero < 1) {
          alert("Hoje não Faro")
          this.setState({numero: 0})
        }
      }
  
  
  
    render() {
    return (
          <div>
            <h1 className="contador-titulo">
              {this.state.numero}
            </h1>
            <Button className="mr-2" color="success" outline onClick={this.aumentar}>
              Aumentar
            </Button>
            <Button  color="danger" outline onClick={this.diminuir}>
              Diminuir
            </Button>
          </div>
        )
    }  
}


export default Contador;