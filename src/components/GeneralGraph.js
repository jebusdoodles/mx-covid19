import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import dbnacional from '../database/dbnacional'; 

const GeneralGraph = () =>{
    return (
        <div className="graphContainer">
            <LineChart
                width={500}
                height={300}
                data={dbnacional}
            >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="fecha-format" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="confirmados" stroke="#cc0000" />
                <Line type="monotone" dataKey="sospechosos" stroke="#4C994C" />
            </LineChart>
        </div>
    );
};

export default GeneralGraph;
