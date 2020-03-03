import React from 'react'
import Layout from '../../components/layout/Layout'
import Personal from '../../components/planes/Personal'
import LayoutForm from '../../components/form/LayoutForm'
import Banner from '../../components/planes/Banner'
import Empresas from '../../components/planes/empresarial/Empresas'

const empresarial = () => {
    return (
        <Layout>
            <Empresas />
            <Personal 
                ubicacion=".5fr 5.5fr 6fr" 
                img="3/4" 
                text="2/3" 
                borde="1/2" 
                bordeJust="flex-start" 
                padding="padding-right: 80px;"
                diente="/img/medio-diente.png"
                dienteDirect="center right"
                imgBig="/img/operacion.png"
            />
            <Banner />
            <LayoutForm diente="/img/diente-form2.png" />
        </Layout>
    )
}

export default empresarial
