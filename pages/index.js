import React from 'react'
import Layout from '../components/layout/Layout'
import Portada from '../components/index/Portada'
import LayoutPlanes from '../components/index/layout/LayoutPlanes'
import InformationRight from '../components/index/InformationRight'
import InformationLeft from '../components/index/InformationLeft'
import LayoutForm from '../components/form/LayoutForm'

const Home = () => {
  return (
    <Layout>

      <Portada />
      <LayoutPlanes />
      <InformationRight />  
      <InformationLeft />
      <LayoutForm diente="/img/diente-form1.png" fondo="/img/doctora.png" />


    </Layout>
  )
}

export default Home
