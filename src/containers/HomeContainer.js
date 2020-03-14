import React, { Component } from 'react'
import AppHeader from './../components/AppHeader';
import CentralContainer from './../components/CentralContainer';

export default class HomeContainer extends Component {
    render() {
        return (
            <div>
                <AppHeader></AppHeader>
                <CentralContainer />
            </div>
        )
    }
}
