import React from 'react';
import { Table } from 'react-bootstrap';
import dataset from '../database/dbestados';

const StateListContainer = () =>{
    const handleList = () =>{
        let datosDiarios = dataset.slice(dataset.length - 32, dataset.length);
        let datosPasados = dataset.slice(dataset.length - 64, dataset.length - 32);

        // funcion para crear un nuevo arraylist con coparación de datos anteriores
        let datosLista = () =>{
            let datosListado = []; 
            for (var i = 0; i < datosDiarios.length; i++){
                datosListado.push({
                    nombre: datosDiarios[i].nombre,
                    confirmados: datosDiarios[i].confirmados,
                    diferencia: datosDiarios[i].confirmados - datosPasados[i].confirmados,
                    decesos: datosDiarios[i].decesos,
                    diferenciaDecesos: datosDiarios[i].decesos - datosPasados[i].decesos,
                    rateDeath: datosDiarios[i].decesos * 100 / datosPasados[i].confirmados
                }); 
            }
            return(datosListado); 
        }

        datosDiarios = datosLista(); 

        //Ordenar lista de mayor a menor
        datosDiarios = datosDiarios.sort(({confirmados:a}, {confirmados:b}) => b-a);

        let residuoDeathRate =(x, pos =2) =>{
            var s = x.toString()

            var decimalLength = s.indexOf('.') + 1
            var numStr = s.substr(0, decimalLength + pos)
            return Number(numStr)
        } 

        return(
            datosDiarios.filter(c => c.confirmados > 0).map( c => 
                <tr key={c.iso}>
                    <td>{c.nombre}</td>
                    <td className='tabla-conf'>{c.confirmados} {c.diferencia > 0 ? <span className='diff-lista'>(+{c.diferencia})</span> : " "}</td>
                    <td className='tabla-conf'>{c.decesos} {c.diferenciaDecesos > 0 ? <span className='diff-lista'>(+{c.diferenciaDecesos})</span> : " "}</td>
                    <td>{residuoDeathRate(c.rateDeath)} %</td>
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
                        <th className='tabla-header'>Decesos</th>
                        <th className='tabla-header'>Tasa de mortalidad</th>
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
