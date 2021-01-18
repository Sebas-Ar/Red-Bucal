import React from 'react'
import Layout from '../components/layout/Layout'
import LayoutPlanes from '../components/index/layout/LayoutPlanes'
import InformationRight from '../components/index/InformationRight'
import InformationLeft from '../components/index/InformationLeft'
import LayoutForm from '../components/form/LayoutForm'
import Footer from '../components/footer/Footer'
import Cobertura from '../components/index/Cobertura'
import InformationRightResponsive from '../components/index/InformationRightResponsive'
import InformationLeftResponsive from '../components/index/InformationLeftResponsive'
import SliderMain from '../components/index/slider/SliderMain'
import Social from '../components/social/Social'

const Home = () => {
  return (
    <Layout>
      <Social />
      <SliderMain />
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
