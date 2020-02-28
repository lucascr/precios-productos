import React, {Component} from 'react';  

/* Import Components */
/*import CheckBox from '../components/CheckBox';  
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';*/
import Button from '../components/Button'

class Buscador extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            producto: {
                barcode: ''
            }
        }

    }
    myChangeHandler(e) {
        let value = e.target.value;
   this.setState( prevState => ({ producto : 
        {...prevState.producto, barcode: value
        }
      }), () => console.log(this.state.producto))

    }
    handleFormSubmit(e) {
        e.preventDefault();
        let productData = this.state.producto;
    
        fetch('http://example.com',{
            method: "POST",
            body: JSON.stringify(productData),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(response => {
            response.json().then(data =>{
              console.log("Successful" + data);
            })
        })
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
                        value="0"
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
