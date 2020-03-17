import React from 'react';
import { Table } from 'react-bootstrap';
import dataset from '../database/dbestados';

const StateListContainer = () =>{
    const handleList = () =>{
        const datosDiarios = dataset.slice(dataset.length - 32, dataset.length);
        return(
            datosDiarios.filter(c => c.confirmados > 0).map( c => 
                <tr>
                    <td>{c.nombre}</td>
                    <td>{c.confirmados}</td>
                </tr>             
            )
        )
    }
    return (
        <div className='TablaConfirmados'>
            <Table striped>
                <thead>
                    <tr>
                        <th>Sitio</th>
                        <th># Confirmados</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        handleList(dataset)
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default StateListContainer; 
