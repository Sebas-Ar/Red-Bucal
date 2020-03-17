import React, { useState, useEffect } from 'react'
import axios from "axios";
import Layout from '../components/layout/Layout'
import NavAdministrador from '../components/administrador/NavAdministrador'
import BillingAdmin from '../components/administrador/items/BillingAdmin';
import FindUserAdmin from '../components/administrador/items/FindUserAdmin';
import ServicesAdmin from '../components/administrador/items/user/ServicesAdmin';
import RecordAdmin from '../components/administrador/items/RecordAdmin';
import InfoAdmin from '../components/administrador/items/InfoAdmin';
import InforUserAdmin from '../components/administrador/items/user/InforUserAdmin'
import BillingUserAdmin from '../components/administrador/items/user/BillingUserAdmin'

const administrador = () => {

    const [select, setSelect] = useState(0);
    const [user, setUser] = useState(0);
    const [type, setType] = useState('');
    const [id, setId] = useState({})
    const [NIT, setNIT] = useState({})
    const [data, setData] = useState({})
    const [adminData, setAdminData] = useState({});

    const get = async () => {
        if (sessionStorage.getItem('token')) {
            const url = '/api/session'
            const result = await axios.get(url)
            console.log(result);
            if (result.data.data.user._id === sessionStorage.getItem('token')) {
                setAdminData(result.data.data.user)
            } else {
                /* router.replace("/") */
            }
        } else {
            /*  router.replace("/") */
        }
    }

    useEffect(() => {
        get()
    }, [])

    const changeId = (e) => {
        setId({ [e.target.name]: e.target.value })
    }

    const changeNIT = (e) => {
        setNIT({ [e.target.name]: e.target.value })
    }

    const changeData = (value) => {
        setData(value)
    }

    const onClick = (selector) => {
        setSelect(selector)
    }

    const ChangeType = (type) => {
        setType(type)
    }

    const ChangeUser = (user) => {
        setUser(user)
    }

    return (
        <Layout>
            
            <NavAdministrador onClick={onClick} select={select} user={user} adminData={adminData}>
                {
                    user == 1 

                    ?
                        select === 0 ? <FindUserAdmin 
                                            ChangeUser={ChangeUser} 
                                            ChangeType={ChangeType} 
                                            type={type} 
                                            changeId={changeId} 
                                            changeNIT={changeNIT}
                                            id={id}
                                            NIT={NIT}
                                            changeData={changeData}
                                            data={data}
                                        /> 
                                     :
                            select === 1 ? <InforUserAdmin data={data} /> 
                                         :
                                select === 2 ?  <BillingUserAdmin 
                                                    data={data}
                                                    changeData={changeData}
                                                /> 
                                             :
                                    select === 3 ? <ServicesAdmin 
                                                        data={data}
                                                        changeData={changeData} 
                                                   /> 
                                                 :
                                        <RecordAdmin 
                                            data={data} 
                                            changeData={changeData}
                                        />
                    :
                        select === 0 ? <FindUserAdmin 
                                            ChangeUser={ChangeUser} 
                                            ChangeType={ChangeType} 
                                            type={type} 
                                            changeId={changeId} 
                                            changeNIT={changeNIT}
                                            id={id}
                                            NIT={NIT}
                                            changeData={changeData}
                                            data={data}
                                        /> 
                                     :
                            select === 1 ? <InfoAdmin data={data}/> 
                                         :
                                <BillingAdmin 
                                    data={data}
                                    changeData={changeData}
                                /> 
                }
            </NavAdministrador>
        </Layout>
    )
}

export default administrador
