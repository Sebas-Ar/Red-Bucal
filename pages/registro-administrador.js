import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout/Layout'
import Registro from '../components/registro-ingreso/Registro'
import RegisterAdmin from '../components/registro-ingreso/RegisterAdmin'
import axios from "axios"



const Ingresar = () => {


    const [register, setregister] = useState(false)
    const [user, setUser] = useState({})

    const changeRegister = () => {
        setregister(!register);
    }

    const ChangeText = e => {
        setUser(Object.assign({}, user, { [e.target.name]: e.target.value }))
    }

    const router = useRouter()

    const onSubmitPersonalRegister = async e => {
        e.preventDefault()
        if (!user.name || !user.lastname || !user.adress || !user.phone || !user.email || !user.birthdate || !user.password || !user.identification) {
            alert('falta algun dato');
        } else {
            const url = '/api/admin'

            try {
                const response = await axios.post(url, user)
                alert(response.data.message/* .status */);
                if (response.data.status === 'ok') {
                    sessionStorage.setItem('token', response.data.token)
                    /* router.push('/usuario') */
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <Layout>

            {
                register
                    ?
                    <RegisterAdmin
                        changeRegister={changeRegister}
                        ChangeText={ChangeText}
                        onSubmitPersonalRegister={onSubmitPersonalRegister}
                        user={user}
                    />
                    :
                    <div className="content">

                        <div className="diente1"></div>
                        <div className="form">
                            <h2>REGISTRO</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis</p>
                            <Registro changeRegister={changeRegister} ChangeText={ChangeText} user={user} errorsBusiness={{}} errors={{}}/>
                        </div>
                        <div className="diente2"></div>

                    </div>
            }

            <style jsx>{`
                
                .content {
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    grid-template-columns: 1fr 4fr 1fr;
                }    

                .diente1, .diente2 {
                    background-size: 100% auto;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                .diente1 {
                    background-image: url("/img/diente-registro.png");
                }

                .diente2 {
                    background-image: url("/img/diente-ingresar.png");
                }

                .linea {
                    background-color: var(--puntoRojo);
                    height: 60%;
                    align-self: center;
                }

                .form {
                    height: 300px;
                    align-self: center;
                    justify-self: center;
                    display: grid;
                    grid-template-rows: 1fr 1fr 3fr;
                    width: 350px;
                }

                h2 {
                    font-size: 30px;
                    color: #333333aa;
                    font-weight: 610;
                }

                p {
                    color: #333333aa;
                    font-size: 14px;
                }
                
                
            `}</style>

        </Layout>
    )
}

export default Ingresar
