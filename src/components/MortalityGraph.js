import React from 'react'; 
import dataset from '../database/dbnacional'; 
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

const MortalityGraph = () =>{

    let mortDays = () => {
        let value = dataset.length - 1
        let act, ant; 
        let diffList = []; 
        
        while(value > 0){
            act = dataset[value].decesos;
            ant = dataset[value - 1].decesos;
            diffList.push({
                dia: dataset[value].fechaformat,
                decesos: act-ant
            }); 
            value -= 1
        }
        return(
            diffList.reverse()
        );
    }
    return(
        <div className='newcases-graph'>
                <h4>Defunciones por día</h4>
                    <LineChart
                        width={700}
                        height={200}
                        data={mortDays()}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="dia" />
                        <YAxis dataKey="decesos" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="decesos" stroke="#cccccc" fill="#000000" label={{ position: 'insideTopLeft', angle: 90 }} />
                    </LineChart>
        </div>
    ); 
}

export default MortalityGraph;