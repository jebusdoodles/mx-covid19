import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap'; 


const mx_svg = require('./../assets/maps/mx-map.svg');

class MapSelector extends Component {
    render() {
        return (
            <div>
                <Image src={mx_svg} className='style_mapsvg'></Image>
            </div>
        );
    }
}

MapSelector.propTypes = {

};

export default MapSelector;