import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavEmpresa from '../components/empresa/NavEmpresa'
import BillingBusiness from '../components/empresa/items/BillingBusiness'
import EmployeeList from '../components/empresa/items/EmployeeList'
import InformationBusiness from '../components/empresa/items/InformationBusiness'
import Layout from '../components/layout/Layout'
import RecordUser from '../components/usuario/items/RecordUser'

const Usuario = () => {
    const router = useRouter()

    const [select, setSelect] = useState(0)
    const [data, setData] = useState({})

    const onClick = (selector) => {
        setSelect(selector)
    }

    const changeData = (dat) => {
        setData(dat)
    }

    const get = async () => {
        if (sessionStorage.getItem('tokenBusiness')) {
            const url = '/api/session'
            const result = await axios.get(url)
            console.log(result)
            if (result.data.data.user._id === sessionStorage.getItem('tokenBusiness')) {
                setData(result.data.data.user)
            } else {
                router.replace('/')
            }
        } else {
            router.replace('/')
        }
    }

    useEffect(() => {
        get()
    }, [])

    return (

        <Layout>
            <NavEmpresa onClick={onClick} select={select} data={data}>
                {
                    select === 0
                        ? <InformationBusiness data={data} />
                        : select === 1
                            ? <BillingBusiness data={data} setData={changeData}/>
                            : select === 2
                                ? <EmployeeList data={data} changeData={changeData}/>
                                : select === 3
                                    ? <RecordUser />
                                    : 'cuatro'
                }
            </NavEmpresa>
        </Layout>
    )
}

export default Usuario
