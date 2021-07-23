import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import { AreaChart, Area } from 'recharts'; 
 
const CardSelector = ({tipo, titulo, cifra, subcifra, data, color}) => {
    return (
        <>
            <Card className={tipo}>
                <Card.Body>
                    <Card.Title className="card-titulo">{titulo}</Card.Title>
                    <Card.Text className="card-numero">
                        {cifra.toLocaleString()}
                        <span className="card-subnumero">( +<CountUp delay={1.5} end={subcifra} /> )</span>
                    </Card.Text>
                    
                    <AreaChart width={200} height={100} data={data}>
                        <Area type="monotone" dataKey="cifra" stroke={color} fillOpacity={.2} fill={color} />
                    </AreaChart>
                    <Card.Text className="card-bottom">{titulo} diarios</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

CardSelector.propTypes = {
    tipo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    cifra: PropTypes.number.isRequired,
    subcifra: PropTypes.number.isRequired
};

export default CardSelector;