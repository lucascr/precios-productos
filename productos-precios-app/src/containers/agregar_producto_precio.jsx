import React, {Component} from 'react';  

class AgregarProductoPrecio extends Component {  
    constructor(props) {
        super(props);

    }
    render() {
        return (
            
            <form className="container-fluid" onSubmit={this.mySubmitHandler}>
                <label>
                Producto:
                </label>
                <div className="form-group">
                    <label className="form-label">Barcode</label>
                    <input
                        className="form-control"
                        id="Barcode"
                        name="Barcode"
                        type="text"
                        placeholder="Barcode"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Precio</label>
                    <input
                        className="form-control"
                        id="Precio"
                        name="Precio"
                        type="text"
                        placeholder="Precio"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Local Comercial</label>
                    
                </div>
                

                <Button 
                    action = {this.mySubmitHandler}
                    type = {'primary'} 
                    title = {'Agregar'} 
                    style={buttonStyle}
                    /> 
            </form>
        )
    }
}

export default AgregarProductoPrecio;