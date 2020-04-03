import React from 'react'
import Layout from '../components/layout/Layout'
import Portada from '../components/index/Portada'
import LayoutPlanes from '../components/index/layout/LayoutPlanes'
import InformationRight from '../components/index/InformationRight'
import InformationLeft from '../components/index/InformationLeft'
import LayoutForm from '../components/form/LayoutForm'
import Footer from '../components/footer/Footer'
import Cobertura from '../components/index/Cobertura'
import InformationRightResponsive from '../components/index/InformationRightResponsive'
import InformationLeftResponsive from '../components/index/InformationLeftResponsive'

const Home = () => {
  return (
    <Layout>

      <Portada />
      <LayoutPlanes />
      <Cobertura />
      <InformationRight />  
      <InformationRightResponsive />
      <InformationLeft />
      <InformationLeftResponsive />
      <LayoutForm 
        diente="/img/diente-form1.png"
        fondo="/img/doctora.png" 
      />
      <Footer />


    </Layout>
  )
}

export default Home
