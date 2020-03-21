import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppHeader = () =>{
    return (
        <div>
            <Navbar bg="gray" variant="light">
                <Navbar.Brand href="/">MX COVID-19</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link href="/prevencion">Prevención</Nav.Link>
                        <Nav.Link href="/oficial">Fuentes oficiales</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default AppHeader;
