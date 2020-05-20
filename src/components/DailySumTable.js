import React from 'react';
import alldata from '../database/dbestados.json'

const DailySumTable = () => {
    const makeTable = () =>{
        let datosDiarios = alldata.slice(alldata.length - 32, alldata.length);
        let datosPasados = alldata.slice(alldata.length - 64, alldata.length - 32);

        let otherData = [];
        let dataListado = () => {
            let datosTabla = [];  
            for(var i = 0; i < datosDiarios.length; i++){
                datosTabla.push({
                    nombre: datosDiarios[i].nombre,
                    diferencia: datosDiarios[i].confirmados - datosPasados[i].confirmados,
                });
            }
            return(datosTabla);
        }

        otherData = dataListado();

        console.log(otherData)
    }
    return(
        <>
            {
                makeTable(alldata) 
            }  
        </>
    );
}

export default DailySumTable; 