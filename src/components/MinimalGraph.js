import React from 'react'; 
import dataset from '../database/dbnacional'; 
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

const MinimalGraph = () =>{

    let diffDays = () => {
        let value = dataset.length - 1
        let act, ant; 
        let diffList = []; 
        
        while(value > 0){
            act = dataset[value].confirmados;
            ant = dataset[value - 1].confirmados;
            diffList.push({
                dia: dataset[value].fechaformat,
                suma: act-ant
            }); 
            value -= 1
        }
        return(
            diffList.reverse()
        );
    }
    return(
        <div className='newcases-graph'>
                <h4>Casos nuevos por dia</h4>
                <BarChart
                    width={700}
                    height={200}
                    data={diffDays()}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dia" />
                    <YAxis dataKey="suma" />
                    <Tooltip />
                    <Legend />
                    <Bar type="monotone" dataKey="suma" fill="#0087cc" label={{ position: 'top' }} />
                </BarChart>
        </div>
    ); 
}

export default MinimalGraph;