import React, { Component } from 'react'
import AppHeader from './../components/AppHeader';
import CentralContainer from './../components/CentralContainer';
import Footer from './../components/Footer';
import LastUpdate from './../components/LastUpdate'; 
import SEO from './../components/SEO/SEO' 

export default class HomeContainer extends Component {
    render() {
        return (
            <div>
                <SEO />
                <LastUpdate />
                <AppHeader></AppHeader>
                <CentralContainer />
                <Footer />
            </div>
        )
    }
}
