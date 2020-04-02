import React, { Component } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { geoConicConformal } from 'd3-geo';
import { scaleQuantile } from 'd3-scale'; 
import { Tooltip, OverlayTrigger } from 'react-bootstrap'; 
import mapData from './../assets/maps/mexican.topojson'; 
import dataset from '../database/dbestados';

class MapSelector extends Component {
    render() {
        let width = 750; 
        let height = 400; 
        let datosDiarios = dataset.slice(dataset.length - 32, dataset.length);

        const colorScale = scaleQuantile()
            .domain(datosDiarios.map(d => d.confirmados))
            .range([
                "#fef1d2",
                "#fedfa9",
                "#f3c379",
                "#e19254",
                "#c35646"
              ]);

        let project = geoConicConformal()
            .rotate([102, 0])
            .center([0, 24])
            .parallels([17.5, 29.5])
            .scale(1200)
            .translate([width / 2, height / 2]);
        
        function renderTooltip(props) {
            return (
                <Tooltip id="button-tooltip">
                    {props.nombre} <br/> <span className='tooltip-conf'>({props.confirmados})</span>
                </Tooltip>
            );
        }

        return (
            <>
                <ComposableMap projection={project}>
                        <Geographies geography={mapData}>
                            {({geographies}) => 
                                geographies.map(geo => {
                                    const cur = datosDiarios.find(s => s.iso === geo.properties.gmi_admin);
                                    return (
                                        <OverlayTrigger
                                            placement="right"
                                            overlay={renderTooltip(cur)}
                                        >
                                            <Geography 
                                                key={geo.rsmKey} 
                                                geography={geo}
                                                fill={cur ? colorScale(cur.confirmados) : "#a3a3a3"}
                                                stroke="#17789b"
                                            />
                                        </OverlayTrigger>
                                    );
                                })
                            }
                        </Geographies>
                </ComposableMap>
            </>
        );
    }
}

export default MapSelector;