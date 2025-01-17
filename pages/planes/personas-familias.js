import Footer from '../../components/footer/Footer'
import LayoutForm from '../../components/form/LayoutForm'
import Planes from '../../components/index/Planes'
import Layout from '../../components/layout/Layout'
import Banner from '../../components/planes/Banner'
import Familias from '../../components/planes/personas/Familias'
import FamiliasResponsive from '../../components/planes/personas/FamiliasResponsive'
import Social from '../../components/social/Social'

const personas = () => {
    return (
        <Layout>
            <Social />
            <Familias />
            <FamiliasResponsive />
            {/* <Personal
                title="USD 12.00 + ITBMS"
                ubicacion="6fr 5fr 1fr"
                img="1/2"
                text="2/3"
                borde="3/4"
                bordeJust="flex-end"
                padding="padding-left: 80px;"
                diente="/img/medio-diente2.png"
                dienteDirect="center left"
                imgBig="/img/cambio.jpg"
                margin="100px"
            />
            <PersonalResponsive imgBig="/img/cambio.jpg"/> */}
            <div className="plan">
                <Planes
                    title="PLAN PREMIUM"
                    img="/img/odontologo-izquierda.png"
                    position="1/3"
                    valor="19.26"
                    fecha="AÑO"
                    colaborador="UN SOLO PAGO ANUAL*"
                    tit1="Plan de Salud Premium Red Bucal:"
                    text1="Diseñado especialmente para resguardar la salud dental y la salud general de aquellas personas que desean darle tratamiento preventivo y/o correctivo a su salud en general."
                />
            </div>
            <Banner />
            <LayoutForm
                diente="/img/diente-form2.png"
                fondo="/img/doctora.png"
            />
            <Footer />

            <style jsx>{`
                .plan {
                    display: grid;
                    justify-content: center;
                    margin: 2rem;
                }
            `}</style>
        </Layout>
    )
}

export default personas
