import React from 'react';
import CardSelector from './CardSelector';
import { Row, Col } from 'react-bootstrap';
import dataset from '../database/dbnacional'; 

const StateDataContainer = () =>{
    const handleData = data =>{

        let conf = data[data.length - 1].confirmados;
        let confdiff = data[data.length - 1].confirmados - data[data.length - 2].confirmados;
        let sus = data[data.length - 1].sospechosos;
        let sosdiff = data[data.length - 1].sospechosos - data[data.length - 2].sospechosos;
        let des = data[data.length - 1].decesos;
        let desdiff = data[data.length - 1].decesos - data[data.length - 2].decesos;
        
        return(
            <Row>
                <Col>
                    <CardSelector tipo='confirm' titulo='Confirmados' cifra={conf} subcifra={confdiff} />
                </Col>
                <Col>
                    <CardSelector tipo='suspect' titulo='Sospechosos' cifra={sus} subcifra={sosdiff} />
                </Col>
                <Col>
                    <CardSelector tipo='mortality' titulo='Decesos' cifra={des} subcifra={desdiff} />
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
