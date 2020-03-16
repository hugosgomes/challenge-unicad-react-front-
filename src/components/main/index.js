import React, { useState, useEffect, Fragment } from 'react';
import api from '../../services/Api';
import Moment from 'moment';
import MapComponent from '../map';

import './styles.css';

function Main() {

    useEffect(() => {
        loadDeliverys();
    }, []);

    const [selectDelivery, setSelectDelivery] = useState({
        origin: null,
        destination: null
    });
    const [deliveries, setDeliveries] = useState();

    const loadDeliverys = async () => {
        const { data } = await api.get();
        setDeliveries(data);
    }

    const handleSelectDelivery = (origin, destination) => {
        setSelectDelivery({ origin, destination });
    }

    return deliveries ? (
        <Fragment>
            <div className="delivery-list">
                <h1>Lista de Entregas</h1>
                {deliveries.map(delivery => (
                    <article key={delivery.id} onClick={() => handleSelectDelivery(delivery.ponto_partida, delivery.ponto_destino)}>
                        <strong>{delivery.nome_cliente}</strong><br />
                        <strong>Ponto de Partida: </strong><span>{delivery.ponto_partida}</span><br />
                        <strong>Ponto de Destino: </strong><span>{delivery.ponto_destino}</span><br />
                        <strong>Data de Entrega: </strong><span>{Moment(delivery.data_entrega).format('DD/MM/YYYY')}</span><br />
                    </article>
                ))}
            </div>
            <div className="map">
                <MapComponent origin={selectDelivery.origin} destination={selectDelivery.destination}/>
            </div>
        </Fragment>
    ) : (
            <div>Loading...</div>
        );
};

export default Main;