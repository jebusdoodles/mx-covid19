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
                    <CardSelector tipo='mortality' titulo='Defunciones' cifra={des} subcifra={desdiff} />
                </Col>
            </Row>
        ) 
    }
    const panelPerDay = data =>{
        let total = data.length; 
        let ultimo = data.length - 7; 
        return(
            <Row className='panel-div'>
                {
                    data.slice(ultimo - total).map(c =>
                        <Col key={c.key}>
                            <p className="data-panel dp-c">{c.confirmados}</p>
                            <p className="data-panel dp-s">{c.sospechosos}</p>
                            <p className="data-panel dp-d">{c.decesos}</p>
                            <p className="data-date">{c.fechaformat}</p>
                        </Col>
                    )
                }
            </Row>
        )
    }
    return (
        <div>
            {
                handleData(dataset)
            }
            {
                panelPerDay(dataset)
            }
        </div>
    );
};

export default StateDataContainer;
