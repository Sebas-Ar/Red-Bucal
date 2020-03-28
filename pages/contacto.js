import React from 'react'
import Layout from '../components/layout/Layout'
import LayoutForm from '../components/form/LayoutForm'
import PanamaMap from '../components/red/PanamaMap'
import Footer from '../components/footer/Footer'

const contacto = () => {
    return (
        <Layout>
            
            {/* <PanamaMap /> */}
            <br/><br/><br/><br/>
            <LayoutForm diente="/img/diente-form1.png" />
            <br/> <br/>
            <Footer />
        
        </Layout>
    )
}

export default contacto
