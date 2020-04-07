import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Footer from '../components/footer/Footer'
import DescuentosBox from '../components/descuentos/DescuentosBox'
import DescuentosList from '../components/descuentos/DescuentosList'
import DescuentosBoxResponsive from '../components/descuentos/DescuentosBoxResponsive'

const servicios = () => {

    const [list, setList] = useState(0);
    const [active, setActive] = useState(false);

    const changeActive = () => {
        setActive(!active)
    }

    const changeList = (num) => {
        setList(num)
    }


    return (
        <Layout>
            <DescuentosList active={active} changeActive={changeActive} list={list}/>
            <DescuentosBox changeActive={changeActive} changeList={changeList}/>
            <DescuentosBoxResponsive changeActive={changeActive} changeList={changeList}/>
            <Footer />  
        </Layout>
    )
}

export default servicios
