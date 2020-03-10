import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from "axios";
import Layout from '../components/layout/Layout'
import NavUsuario from '../components/usuario/NavUsuario'
import InformationUser from '../components/usuario/items/InformationUser'
import BillingUser from '../components/usuario/items/BillingUser'
import ServicesUser from '../components/usuario/items/ServicesUser'
import RecordUser from '../components/usuario/items/RecordUser'

const usuario = () => {

    const router = useRouter()

    const [select, setSelect] = useState(0);
    const [data, setData] = useState({});

    const onClick = (selector) => {
        setSelect(selector)
    }

    const get = async () => {
        if (sessionStorage.getItem('token')) {
            const url = '/api/session'
            const result = await axios.get(url)
            console.log(result);
            if (result.data.data.user._id === sessionStorage.getItem('token')) {
                setData(result.data.data.user)
            } else {
                /* router.replace("/") */
            }
        } else {
            /* router.replace("/") */
        }
    } 

    useEffect(() => {
        get()
    }, [])

  /*   const { state: { isLoggedIn, user: { name } } } = useContext(UserContext); */

    /* const handleLogout = (event) => {
        event.preventDefault();
        axioswal
            .delete('/api/session')
            .then((data) => {
                if (data.status === 'ok') {
                    dispatch({ type: 'clear' });
                }
            });
    }; */
    
    /* if (true) { */
        return (
    
            <Layout>
                <NavUsuario onClick={onClick} select={select} data={data}>
                    {
                        select === 0 ? <InformationUser data={data} /> : 
                        select === 1 ? <BillingUser data={data}/> :
                        select === 2 ? <ServicesUser  data={data}/> :
                        select === 3 ? <RecordUser /> :
                        'cuatro' 
                    }
                </NavUsuario>
            </Layout>
        )
    /* } else {
        <Out />
    } */
}

export default usuario
