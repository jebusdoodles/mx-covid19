import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import StateMapContainer from './StateMapContainer';
import StateListContainer from './StateListContainer'; 
import StateDataContainer from './StateDataContainer';

export default class CentralContainer extends Component {
    render() {
        return (
            <div>
                <Container className="contenedor-principal">
                    <Row>
                        <Col xs={12} md={8}>
                            <StateMapContainer mapa='mx' titulo='México' />
                        </Col>
                        <Col xs={6} md={4}>
                            <StateListContainer />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <StateDataContainer />
                    </Row>
                </Container>
            </div>
        )
    }
}
