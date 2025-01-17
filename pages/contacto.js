import { useState } from 'react'
import Footer from '../components/footer/Footer'
import LayoutForm from '../components/form/LayoutForm'
import Layout from '../components/layout/Layout'
import location from '../components/red/locations/location'
import PanamaMap from '../components/red/PanamaMap'
import Social from '../components/social/Social'

const Contacto = () => {
    const [clinic, setClinic] = useState(0)

    const changeClinic = (num) => {
        setClinic(num)
    }

    return (
        <Layout>
            <Social />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <PanamaMap changeClinic={changeClinic} location={location} clinic={clinic}/>
            <br/><br/><br/><br/>
            <LayoutForm diente="/img/diente-form1.png" fondo="/img/doctora.png" />
            <br/> <br/>
            <Footer />
        </Layout>
    )
}

export default Contacto
