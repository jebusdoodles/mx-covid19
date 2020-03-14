import React, { Component } from 'react';
import CardSelector from './CardSelector';
import { Row, Col } from 'react-bootstrap';

export default class StateDataContainer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <CardSelector tipo='confirm' titulo='Casos confirmados' cifra={12} />
                    </Col>
                    <Col>
                        <CardSelector tipo='suspect' titulo='Casos sospechosos' cifra={0} />
                    </Col>
                    <Col>
                        <CardSelector tipo='mortality' titulo='Defunciones' cifra={0} />
                    </Col>
                </Row>
            </div>
        )
    }
}
