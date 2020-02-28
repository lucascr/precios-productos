import React, {Component} from 'react';  

class AgregarLocalComercial extends Component {  
    constructor(props) {
        super(props);

    }
    render() {
        return (
            
            <form className="container-fluid" onSubmit={this.mySubmitHandler}>
                <label>
                Local Comercial:
                </label>

                <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <input
                        className="form-control"
                        id="Nombre"
                        name="Nombre"
                        type="text"
                        placeholder="Nombre"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Locacion</label>
                    <input
                        className="form-control"
                        id="Locacion"
                        name="Locacion"
                        type="text"
                        placeholder="Locacion"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Provincia</label>
                    <input
                        className="form-control"
                        id="Provincia"
                        name="Provincia"
                        type="text"
                        placeholder="Provincia"
                    />
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

export default AgregarLocalComercial;