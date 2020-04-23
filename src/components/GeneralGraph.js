import React from 'react';
import { 
            LineChart, 
            Line, 
            XAxis, 
            YAxis, 
            CartesianGrid, Tooltip, Legend, Brush, ReferenceLine 
        } from 'recharts';
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
                <Line type="monotone" dataKey="confirmados" stroke="#f49435" />
                <Line type="monotone" dataKey="sospechosos" stroke="#347aac" />
                <Line type="monotone" dataKey="decesos" stroke="#333" />
                <ReferenceLine x="17-Marzo" stroke="#e19254" label="suspención de clases" strokeDasharray="3 3" />
                <ReferenceLine x="30-Marzo" stroke="#e19254" label="emergencia sanitaria" strokeDasharray="3 3" />
                <ReferenceLine x="24-Marzo" stroke="#e19254" label="fase 2" strokeDasharray="3 3" />
                <ReferenceLine x="21-Abril" stroke="#e19254" label="fase 3" strokeDasharray="3 3" />
            </LineChart>
        </div>
    );
};

export default GeneralGraph;
