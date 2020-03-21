import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup'; 

const CardSelector = ({tipo, titulo, cifra, subcifra}) => {
    return (
        <div>
            <Card className={tipo}>
                <Card.Body>
                    <Card.Title className="card-titulo">{titulo}</Card.Title>
                    <Card.Text className="card-numero">
                        <CountUp end={cifra} /> <br/>
                        <span className="card-subnumero">(+<CountUp delay={1.5} end={subcifra} />)</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

CardSelector.propTypes = {
    tipo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    cifra: PropTypes.number.isRequired,
    subcifra: PropTypes.number.isRequired
};

export default CardSelector;