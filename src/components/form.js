
import React, { Fragment } from 'react';
import api from '../services/Api';

function Form() {

    const submitHandler = async (event) => {
        event.preventDefault();
        // const formData = new FormData(event.target);
        // const data = Object.fromEntries(formData);
        // api.post('', data);
    };

    return(
        <Fragment>
            <h1 className="text-center">Cadastrar Entrega</h1>
            <form onSubmit={submitHandler}>
                <div className="form-row">
                    <div className="col-md-12 mb-6">
                        <label htmlFor="nome_cliente">Nome do Cliente</label>
                        <input type="text" name="nome_cliente" id="nome_cliente" className="form-control" required/>
                    </div>
                    <div className="col-md-12 mb-6">
                        <label htmlFor="ponto_partida">Ponto de Partida</label>
                        <input type="text" name="ponto_partida" id="ponto_partida" className="form-control" required/>
                    </div>
                    <div className="col-md-12 mb-6">
                        <label htmlFor="ponto_destino">Ponto de Destino</label>
                        <input type="text" name="ponto_destino" id="ponto_destino" className="form-control" required/>
                    </div>
                    <div className="col-md-4 mb-2">
                        <label htmlFor="data_entrega">Data de Entrega</label>
                        <input type="date" name="data_entrega" id="data_entrega" className="form-control" required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Cadastrar</button>
            </form>
        </Fragment>
    );
}

export default Form;


