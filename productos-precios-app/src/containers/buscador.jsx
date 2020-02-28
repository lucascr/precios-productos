import React, {Component} from 'react';  

import CheckBox from '../components/CheckBox';  
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'

class Buscador extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            barcode: ''
        }

    }
    myChangeHandler = (e) => {
        this.setState({barcode: e.target.value});
    }
    mySubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.barcode);

    }
    
    render() {
        return (
            
            <form className="container-fluid" onSubmit={this.mySubmitHandler}>
                <label>
                Producto:
                <div className="form-group">
                    <label className="form-label">Barcode</label>
                    <input
                        className="form-control"
                        id="Barcode"
                        name="Barcode"
                        type="text"
                        onChange={this.myChangeHandler}
                        placeholder="Scan Barcode"
                        autocomple="off"
                    />
                </div>

                </label>
                <Button 
                    action = {this.mySubmitHandler}
                    type = {'primary'} 
                    title = {'Buscar'} 
                    style={buttonStyle}
                    /> 
            </form>
        )
    }
} 

const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }
export default Buscador;
