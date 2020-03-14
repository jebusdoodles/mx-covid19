import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const CardSelector = ({tipo, titulo, cifra}) => {
    return (
        <div>
            <Card className={tipo}>
                <Card.Body>
                    <Card.Title className="card-titulo">{titulo}</Card.Title>
                    <Card.Text className="card-numero">{cifra}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

CardSelector.propTypes = {
    tipo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    cifra: PropTypes.number.isRequired,
};

export default CardSelector;