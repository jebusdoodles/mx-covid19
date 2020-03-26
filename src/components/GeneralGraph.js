import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from 'recharts';
import dbnacional from '../database/dbnacional'; 

const GeneralGraph = () =>{
    //graficas de rechart
    return (
        <div className="graphContainer">
            <LineChart
                width={500}
                height={300}
                data={dbnacional}
            >

                <Brush dataKey="name" height={30} stroke="#bee5eb" />   
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="fechaformat" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="confirmados" stroke="#cc0000" />
                <Line type="monotone" dataKey="sospechosos" stroke="#4C994C" />
                <Line type="monotone" dataKey="decesos" stroke="#333" />
            </LineChart>
        </div>
    );
};

export default GeneralGraph;
