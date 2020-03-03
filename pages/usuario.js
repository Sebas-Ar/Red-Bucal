import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Redirect, Route } from "react-router-dom"
import Layout from '../components/layout/Layout'
import NavUsuario from '../components/usuario/NavUsuario'
import InformationUser from '../components/usuario/items/InformationUser'
import BillingUser from '../components/usuario/items/BillingUser'
import ServicesUser from '../components/usuario/items/ServicesUser'
import RecordUser from '../components/usuario/items/RecordUser'
import Out from '../components/config/Out';

const usuario = () => {

    const [select, setSelect] = useState(0);
    const [data, setData] = useState({});
    const [storage, setStorage] = useState('')

    const onClick = (selector) => {
        setSelect(selector)
    }

    const gettingData =  async () => {
        const url = '/api/session'
        const result = await axios.get(url)
        setData(result.data.data.user)
        setStorage(sessionStorage.getItem('token'))
    }

    useEffect( () => {
        gettingData()
    }, [])

    useEffect(() => {
        setStorage(sessionStorage.getItem('token'))
        console.log(storage);
    }, [storage]);

    return (

            <Layout>
                <NavUsuario onClick={onClick} select={select}>
                    {
                        select === 0 ? <InformationUser data={data} storage={storage}/> : 
                        select === 1 ? <BillingUser /> :
                        select === 2 ? <ServicesUser /> :
                        select === 3 ? <RecordUser /> :
                        'cuatro' 
                    }
                </NavUsuario>
            </Layout>
        /* :
            <Out /> */
    )
}

/* usuario.getInitialProps = () => {

} */



export default usuario
