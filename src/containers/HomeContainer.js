import React, { Component } from 'react'
import AppHeader from './../components/AppHeader';
import CentralContainer from './../components/CentralContainer';
import Footer from './../components/Footer';
import LastUpdate from './../components/LastUpdate'; 
import SEO from './../components/SEO/SEO'; 
import data from '../database/dbnacional'; 

export default class HomeContainer extends Component {
    render() {
        let conf = data[data.length - 1].confirmados;
        return (
            <div>
                <SEO confirmados={`${conf}`} />
                <LastUpdate />
                <AppHeader></AppHeader>
                <CentralContainer />
                <Footer />
            </div>
        )
    }
}
