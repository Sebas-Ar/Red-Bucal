import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import LayoutFeatures from '../components/red/layout/LayoutFeatures'
import SliderImg from '../components/red/SliderImg'
import PanamaMap from '../components/red/PanamaMap'
import Footer from '../components/footer/Footer'
import fetch from 'isomorphic-unfetch'


const Red = ({data}) => {

    return (
        <Layout>
            <PanamaMap TOKEN_MAP={data.message}/> 
            <LayoutFeatures/>
            <br/>
            <br/>
            <br/>
            {/* <SliderImg location={location}/> */}
            <Footer />
        </Layout>
    )
}

export async function getServerSideProps() {
    const url = 'http://localhost:3000/api/map/getToken'
    const result = await fetch(url)
    const json = await result.json()
    return {
        props: { data: json }
    }
}

export default Red
