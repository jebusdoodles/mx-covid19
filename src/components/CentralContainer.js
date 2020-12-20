import React, { Component } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap';
import StateMapContainer from './StateMapContainer';
import StateListContainer from './StateListContainer'; 
import StateDataContainer from './StateDataContainer';
import GeneralGraph from './GeneralGraph';
import MinimalGraph from './MinimalGraph';
import DailySumTable from './DailySumTable';
import MortalityGraph from './MortalityGraph';
import HeatMap from './HeatMap';

export default class CentralContainer extends Component {
    render() {
        return (
            <>
                <Container className="contenedor-principal">
                    <Row className="justify-content-md-center">
                        <StateDataContainer />
                    </Row>
                    <Row>
                        <GeneralGraph />
                    </Row>
                    <Row className="justify-content-center">
                    <Alert variant='warning'>
                        Debido a un reajuste por parte de la <Alert.Link href="https://www.gob.mx/salud/documentos/datos-abiertos-152127">Secretaria de Salud</Alert.Link> el día 5-10-2020 los datos pueden variar.
                    </Alert>
                    </Row>
                    <Row>
                        <Col xs={10} md={7}>
                            <StateMapContainer mapa='mx' titulo='México' />
                        </Col>
                        <Col xs={8} md={5}>
                            <StateListContainer />
                        </Col>
                    </Row>
                    <Row>
                        <DailySumTable />
                    </Row>
                    <Row>
                        <MinimalGraph />
                    </Row>
                    <Row>
                        <MortalityGraph />
                    </Row>
                </Container>
            </>
        )
    }
}
