import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import LayoutFeatures from '../components/red/layout/LayoutFeatures'
import SliderImg from '../components/red/SliderImg'
import PanamaMap from '../components/red/PanamaMap'
import Footer from '../components/footer/Footer'


const Red = () => {

    const [location, setLocation] = useState(0);

    const setLoc = (loc) => {
        setLocation(loc)
        console.log(location);
    }

    return (
        <Layout>
            <PanamaMap/> 
            <LayoutFeatures location={location}/>
            <br/>
            <br/>
            <br/>
            {/* <SliderImg location={location}/> */}
            <Footer />
        </Layout>
    )
}

export default Red
