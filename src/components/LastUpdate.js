import React from 'react';
import { Alert } from 'react-bootstrap';
import { FaRegClock } from 'react-icons/fa';
//import dataset from '../database/dbnacional'; 

const LastUpdate = () =>{
    //let date_update = dataset[dataset.length - 1].fechaformat;
    return (
        <Alert variant='danger' className='alerta-estilos'>
            <FaRegClock /> Sitio cerrado el 26 de abril del 2022.  <Alert.Link href="https://twitter.com/SSalud_mx/status/1519116887149404160">SSA</Alert.Link>
        </Alert>
    );
}

export default LastUpdate;