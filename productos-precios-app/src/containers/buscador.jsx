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
        

    }
    myChangeHandler(e) {
        //let value = e.target.value;
    }
     
    render() {
        return (
            
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <label>
                Producto:
                <div className="form-group">
    <label className="form-label">Barcode</label>
    <input
      className="form-control"
      id="Barcode"
      name="Barcode"
      type="text"
      value=""
      onChange={this.myChangeHandler}
      placeholder="Scan Barcode"
      />
  </div>

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
