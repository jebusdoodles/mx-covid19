import React from 'react';
import { Alert } from 'react-bootstrap';
import { FaRegClock } from 'react-icons/fa';
import dataset from '../database/dbnacional'; 

const LastUpdate = () =>{
    let date_update = dataset[dataset.length - 1].fechaformat;
    return (
        <Alert variant='info' className='alerta-estilos'>
            <FaRegClock /> Última actualización de información del <b> {date_update} </b>
        </Alert>
    );
}

export default LastUpdate;