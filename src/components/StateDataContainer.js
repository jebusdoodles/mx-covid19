import React from 'react';
import CardSelector from './CardSelector';
import { Row, Col } from 'react-bootstrap';
import dataset from '../database/dbnacional'; 

const StateDataContainer = () =>{
    const handleData = data =>{
        let conf = data[data.length - 1].confirmados;
        let sus = data[data.length - 1].sospechosos;
        let des = data[data.length - 1].decesos;
        return(
            <Row>
                <Col>
                    <CardSelector tipo='confirm' titulo='Confirmados' cifra={conf} />
                </Col>
                <Col>
                    <CardSelector tipo='suspect' titulo='Sospechosos' cifra={sus} />
                </Col>
                <Col>
                    <CardSelector tipo='mortality' titulo='Decesos' cifra={des} />
                </Col>
            </Row>
        ) 
    }
    return (
        <div>
            {
                handleData(dataset)
            }
        </div>
    );
};

export default StateDataContainer;
