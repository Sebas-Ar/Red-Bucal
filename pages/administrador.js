import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import NavAdministrador from '../components/administrador/NavAdministrador'
import BillingAdmin from '../components/administrador/items/BillingAdmin';
import FindUserAdmin from '../components/administrador/items/FindUserAdmin';
import ServicesAdmin from '../components/administrador/items/ServicesAdmin';
import RecordAdmin from '../components/administrador/items/RecordAdmin';
import InfoAdmin from '../components/administrador/items/InfoAdmin';

const administrador = () => {

    const [select, setSelect] = useState(0);
    const [user, setUser] = useState(0);
    const [type, setType] = useState('');

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
            
            <NavAdministrador onClick={onClick} select={select} user={user}>
                {
                    select === 0 ? <FindUserAdmin ChangeUser={ChangeUser} ChangeType={ChangeType} type={type} /> :
                    select === 1 ? <InfoAdmin /> :
                    select === 2 ? <BillingAdmin /> :
                    select === 3 ? <ServicesAdmin /> :
                        <RecordAdmin />
                }
            </NavAdministrador>
        </Layout>
    )
}

export default administrador
