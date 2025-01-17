import { useState } from 'react'
import DescuentosList from '../components/descuentos/DescuentosList'
import TitleDescuentos from '../components/descuentos/TitleDescuentos'
import DescuentosCard from '../components/descuentos/cards/DescuentosCard'
import Footer from '../components/footer/Footer'
import Layout from '../components/layout/Layout'
import Social from '../components/social/Social'

const Beneficios = () => {
    const [list, setList] = useState(0)
    const [active, setActive] = useState(false)

    const changeActive = () => {
        setActive(!active)
    }

    const changeList = (num) => {
        setList(num)
    }

    return (
        <Layout>
            <Social />
            <TitleDescuentos />
            <DescuentosList
                active={active}
                changeActive={changeActive}
                list={list}
            />
            <DescuentosCard
                changeActive={changeActive}
                changeList={changeList}
            />
            {/* <DescuentosBox
                changeActive={changeActive}
                changeList={changeList}
            />
            <DescuentosBoxResponsive
                changeActive={changeActive}
                changeList={changeList}
            /> */}
            <Footer />
        </Layout>
    )
}

export default Beneficios
