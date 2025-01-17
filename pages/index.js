import Footer from '../components/footer/Footer'
import LayoutForm from '../components/form/LayoutForm'
import Cobertura from '../components/index/Cobertura'
import InformationLeft from '../components/index/InformationLeft'
import InformationLeftResponsive from '../components/index/InformationLeftResponsive'
import InformationRight from '../components/index/InformationRight'
import InformationRightResponsive from '../components/index/InformationRightResponsive'
import LayoutPlanes from '../components/index/layout/LayoutPlanes'
import SliderMain from '../components/index/slider/SliderMain'
import Layout from '../components/layout/Layout'
import Respaldo from '../components/nosotros/Respaldo'
import Social from '../components/social/Social'

const Home = () => {
    return (
        <Layout>
            <Social />
            <SliderMain />
            <LayoutPlanes />
            <Cobertura />
            <Respaldo />
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
