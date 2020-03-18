import React from 'react'; 
import Helmet from 'react-helmet'; 

const SEO = () => (
    <>
        <Helmet>
            <title>Tabla seguimiento - MX Covid-19</title>
            <meta name="description" content="Tabla de seguimiento de los casos de COVID-19 (Coronavirus) en México" />
            <link rel="canonical" href="https://mx-covid19.github.io" />
                { /* Tags de OpenGraph */ }
                <meta property="og:url" content="https://mx-covid19.github.io" />
                <meta property="og:title" content="MX Covid-19 - Tabla seguimiento" />
                <meta property="og:description" content="Tabla de seguimiento de los casos de COVID-19 (Coronavirus) en México" />
                { /* Tags de Twitter Card */ }
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MX Covid-19 - Tabla seguimiento" />
                <meta property="twitter:description" content="Tabla de seguimiento de los casos de COVID-19 (Coronavirus) en México" />
        </Helmet>
    </>
)

export default SEO; 