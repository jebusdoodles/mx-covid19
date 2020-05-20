import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import StateMapContainer from './StateMapContainer';
import StateListContainer from './StateListContainer'; 
import StateDataContainer from './StateDataContainer';
import GeneralGraph from './GeneralGraph';
import MinimalGraph from './MinimalGraph';
import DailySumTable from './DailySumTable';
import MortalityGraph from './MortalityGraph';

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
                    <Row>
                        <Col xs={10} md={7}>
                            <StateMapContainer mapa='mx' titulo='México' />
                        </Col>
                        <Col xs={8} md={5}>
                            <StateListContainer />
                        </Col>
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
