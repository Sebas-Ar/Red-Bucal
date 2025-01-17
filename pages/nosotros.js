import Footer from '../components/footer/Footer'
import Layout from '../components/layout/Layout'
import NuestrosClientes from '../components/nosotros/NuestrosClientes'
import SobreNosotros from '../components/nosotros/SobreNosotros'
import Social from '../components/social/Social'

const Nosotros = () => {
    return (
        <Layout>
            <Social />
            <SobreNosotros />
            {/* <Respaldo /> */}
            <NuestrosClientes />
            <Footer />
        </Layout>
    )
}

export default Nosotros
