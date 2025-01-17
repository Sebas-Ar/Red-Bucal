import { useState } from 'react'
import Footer from '../components/footer/Footer'
import Layout from '../components/layout/Layout'
import PrevencionList from '../components/prevencion/PrevencionList'
import TitlePrevencion from '../components/prevencion/TitlePrevencion'
import PrevencionCard from '../components/prevencion/cards/PrevencionCard'
import Social from '../components/social/Social'

const Prevencion = () => {
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
            <TitlePrevencion />
            <PrevencionList
                active={active}
                changeActive={changeActive}
                list={list}
            />
            <PrevencionCard
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

export default Prevencion
