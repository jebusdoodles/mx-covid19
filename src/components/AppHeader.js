import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaAngleUp } from 'react-icons/fa';

export default class AppHeader extends Component {
    render() {
        return (
            <div>
                <Navbar bg="gray" variant="light">
                    <Navbar.Brand href="/">MX COVID-19</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <div className='datosHeader'>
                                <p>casos: <span><FaAngleUp />+3</span></p>
                                <p>muertes: <span><FaAngleUp />+3</span></p>
                            </div>
                            <Nav.Link href="/prevencion">Prevención</Nav.Link>
                            <Nav.Link href="/oficial">Fuentes oficiales</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
