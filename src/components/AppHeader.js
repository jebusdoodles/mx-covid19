import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'; 

export default class AppHeader extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/">MX COVID-19</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link href="/prevencion">Prevención</Nav.Link>
                            <Nav.Link href="/oficial">Fuentes oficiales</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
