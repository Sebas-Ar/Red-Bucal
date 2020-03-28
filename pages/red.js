import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import LayoutFeatures from '../components/red/layout/LayoutFeatures'
import SliderImg from '../components/red/SliderImg'
import PanamaMap from '../components/red/PanamaMap'
import Footer from '../components/footer/Footer'


const Red = ({ data }) => {

    useEffect(() => {
        console.log(data)
    }, [])


    return (
        <Layout>
            <PanamaMap/> 
            <LayoutFeatures/>
            <br/>
            <br/>
            <br/>
            {/* <SliderImg location={location}/> */}
            <Footer />
        </Layout>
    )
}

export async function getServerSideProps(context) {
    return {
        props: { data: process.env.TOKEN_MAP }
    }
}

export default Red
