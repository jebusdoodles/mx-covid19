import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import dataset from '../database/dbnacional';

const AppHeader = () =>{
    const handleDatos = data =>{
        let confdiff = data[data.length - 1].confirmados - data[data.length - 2].confirmados;
        let sosdiff = data[data.length - 1].sospechosos - data[data.length - 2].sospechosos;
        return(
            <div className='datosHeader'>
                <p>confirmados: <span className='color-conf'>+ {confdiff}</span></p>
                <p>sospechosos: <span className='color-sosdiff'>+ {sosdiff}</span></p>
            </div>
        )
    }
    return (
        <div>
            <Navbar bg="gray" variant="light">
                <Navbar.Brand href="/">MX COVID-19</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        {
                            handleDatos(dataset)
                        }
                        <Nav.Link href="/prevencion">Prevención</Nav.Link>
                        <Nav.Link href="/oficial">Fuentes oficiales</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default AppHeader;
