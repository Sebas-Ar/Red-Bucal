import React from 'react'
import Layout from '../../components/layout/Layout'
import Familias from '../../components/planes/personas/Familias'
import Personal from '../../components/planes/Personal'
import LayoutForm from '../../components/form/LayoutForm'
import Banner from '../../components/planes/Banner'
import Footer from '../../components/footer/Footer'
import FamiliasResponsive from '../../components/planes/personas/FamiliasResponsive'
import PersonalResponsive from '../../components/planes/PersonalResponsive'
import Social from '../../components/social/Social'

const personas = () => {
    return (
        <Layout>
            <Social />
            <Familias />
            <FamiliasResponsive />
            <Personal
                ubicacion="6fr 5fr 1fr"
                img="1/2"
                text="2/3"
                borde="3/4"
                bordeJust="flex-end"
                padding="padding-left: 80px;"
                diente="/img/medio-diente2.png"
                dienteDirect="center left"
                imgBig="/img/cambio.jpg"
                margin="100px"
            />
            <PersonalResponsive imgBig="/img/cambio.jpg"/>
            <Banner />
            <LayoutForm diente="/img/diente-form2.png" fondo="/img/doctora.png" />
            <Footer />
        </Layout>
    )
}

export default personas
