import React from 'react';
import { Figure } from 'react-bootstrap';
const mx_svg = require('./../assets/maps/mx-map.svg');

const MapSelector = () =>{
    return (
        <div>
            <Figure>
                <Figure.Image
                    src={mx_svg}
                    className='style_mapsvg'
                />
                <Figure.Caption class='style_mapsvg_caption'>
                    Mapa Casos Confimados México.
                </Figure.Caption>
            </Figure>
        </div>
    );
}

export default MapSelector;