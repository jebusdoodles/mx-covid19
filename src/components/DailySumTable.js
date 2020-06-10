import React from 'react';
import alldata from '../database/dbestados.json'

const DailySumTable = () => {
    const makeTable = () =>{
        let datosDiarios = alldata.slice(alldata.length - 32, alldata.length);
        let datosPasados = alldata.slice(alldata.length - 64, alldata.length - 32);
        let otherData = [];
        let ultimo = 32; 
        let final =64;

        let dataListado = () => {
            let datosTabla = [];  /*
            for(var j=0; j < 4; j++){
                for(var i = 0; i < datosDiarios.length; i++){
                    datosTabla.push({
                        nombre: i,
                        diferencia: datosDiarios[i].confirmados - datosPasados[i].confirmados,
                    });
                }
                datosDiarios = datosPasados

                ultimo = ultimo + 32 
                final = final + 32 
                
                datosPasados = alldata.slice(alldata.length - final, alldata.length - ultimo)
            }*/
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