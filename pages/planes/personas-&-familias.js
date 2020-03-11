import React from 'react'
import Layout from '../../components/layout/Layout'
import Familias from '../../components/planes/personas/Familias'
import Personal from '../../components/planes/Personal'
import LayoutForm from '../../components/form/LayoutForm'
import Banner from '../../components/planes/Banner'

const personasfamilias = () => {
    return (
        <Layout>
            <Familias />
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
            <Banner />
            <LayoutForm diente="/img/diente-form2.png" />
        </Layout>
    )
}

export default personasfamilias