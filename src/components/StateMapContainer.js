import React from 'react';
import PropTypes from 'prop-types';
import MapSelector from './MapSelector';

const StateMapContainer = ({ mapa, titulo }) => {
    return (
        <>
            <div className='title-map-state'>{titulo}</div>
            <div className='svg-map-state'>
                <MapSelector mapa={mapa} />
            </div>
        </>
    );
}

StateMapContainer.propTypes = {
    titulo: PropTypes.string.isRequired,
    mapa: PropTypes.string.isRequired,
};

export default StateMapContainer;