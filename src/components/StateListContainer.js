import React from 'react';
import { Table } from 'react-bootstrap';
import dataset from '../database/dbestados';

const StateListContainer = () =>{
    const handleList = () =>{
        let datosDiarios = dataset.slice(dataset.length - 32, dataset.length);
        //Ordenar lista de mayor a menor
        datosDiarios = datosDiarios.sort(({confirmados:a}, {confirmados:b}) => b-a);
        // Imprimir los datos de una tabla
        return(
            datosDiarios.filter(c => c.confirmados > 0).map( c => 
                <tr>
                    <td>{c.nombre}</td>
                    <td className='tabla-conf'>{c.confirmados}</td>
                </tr>             
            )
        )
    }
    return (
        <div className='TablaConfirmados'>
            <Table striped>
                <thead>
                    <tr>
                        <th className='tabla-header'>Estado</th>
                        <th className='tabla-header'>Confirmados</th>
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
