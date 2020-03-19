import React, { Component } from 'react'
import AppHeader from './../components/AppHeader';
import CentralContainer from './../components/CentralContainer';
import Footer from './../components/Footer';
import SEO from './../components/SEO/SEO' 

export default class HomeContainer extends Component {
    render() {
        return (
            <div>
                <SEO />
                <AppHeader></AppHeader>
                <CentralContainer />
                <Footer />
            </div>
        )
    }
}
