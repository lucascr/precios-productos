import React, {Component} from 'react';  

/* Import Components */
import CheckBox from '../components/CheckBox';  
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'

class Buscador extends Component {  
    constructor(props) {
        super(props);
        
        this.handleBarcode = this.handleBarcode.bind(this);

    }
    handleBarcode(e) {
        let value = e.target.value;
       }
     
    render() {
        return (
            
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <label>
                Producto:
                <Input inputType={'text'}
                    title= {'Barcode'}
                    name= {'barcode'}
                    value={''}
                    placeholder = {'scan barcode'}
                    handleChange = {this.handleBarcode}

                    /> {/* Barcode search */}

                </label>
                <Button 
                    action = {this.handleFormSubmit}
                    type = {'primary'} 
                    title = {'Submit'} 
                    style={buttonStyle}
                    /> { /*Submit */ }
            </form>
        )
    }
} 

const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }
export default Buscador;
