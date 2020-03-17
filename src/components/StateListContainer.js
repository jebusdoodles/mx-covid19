import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class StateListContainer extends Component {
    render() {
        return (
            <div className='TablaConfirmados'>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Sitio</th>
                            <th># Confirmados</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CDMX</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>CDMX</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>CDMX</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>CDMX</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>CDMX</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>CDMX</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>CDMX</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>CDMX</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>CDMX</td>
                            <td>12</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
