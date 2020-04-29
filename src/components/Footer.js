import React from 'react';
import { FaHeart, FaGithubAlt, FaRegNewspaper } from "react-icons/fa";
import { Container, Row } from 'react-bootstrap'; 

const Footer = () =>{
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <div className='links-adicionales'>
                        <h4>Más información</h4>
                        <p>
                            <li><a href='https://jebusdoodles.wordpress.com/2020/04/13/panel-seguimiento-mxcovid19/'><FaRegNewspaper /> ¿Como lo hice? y preguntas frecuentes</a></li>
                            <li><a href='https://github.com/jebusdoodles/mx-covid19'><FaGithubAlt /> Repositorio de GitHub</a></li>
                        </p>
                        <h4>Sitios adicionaless</h4>
                        <p>
                            <li><a href='https://coronavirus.gob.mx/'>Sitio oficial Secretaria de Salud [MX]</a></li>
                            <li><a href='https://mexico.frenalacurva.net/'>Iniciativa Frena la Curva [MX]</a></li>
                            <li><a href='http://covidatos.mx/'>Tablero de datos COVIDATOSMX (Descontuinado)</a></li>
                        </p>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                    <div className='footer-container'>
                        <p className='footer-text'>Hecho con <FaHeart /> por <a href='https://twitter.com/JebusDoodles'>Jesús Cortés</a>. Quédense en casa.</p>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Footer;
