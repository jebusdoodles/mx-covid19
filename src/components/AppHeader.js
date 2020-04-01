import React from 'react';
import { Navbar } from 'react-bootstrap';

const AppHeader = () =>{
    return (
        <div>
            <Navbar bg="gray" variant="light">
                <Navbar.Brand href="/">MX COVID-19</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default AppHeader;
