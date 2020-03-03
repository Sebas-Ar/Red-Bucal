import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Registro from '../components/registro-ingreso/Registro'
import Ingreso from '../components/registro-ingreso/Ingreso'
import RegisterAll from '../components/registro-ingreso/RegisterAll'
import axios from "axios";


const Ingresar = () => {

    const [register, setregister] = useState(false)
    const [user, setUser] = useState({})
    const [login, setLogin] = useState({});
    
    const changeRegister = () => {
        setregister(!register);
    }


    const ChangeText = e => {
        setUser(Object.assign({}, user, { [e.target.name]: e.target.value }))
    }

    const ChangeTextLogin = e => {
        setLogin(Object.assign({}, login, { [e.target.name]: e.target.value }))
    }

    const onSubmitRegister = async e => {
        e.preventDefault()

        if (!user.name || !user.lastname || !user.adress || !user.phone || !user.email || !user.identification || !user.birthdate || !user.know || !user.password){
            alert('falta algun dato');
        } else {
            const url = '/api/users'

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                })
                
                console.log(response);
            } catch (error) {
                console.error(error)   
            }
        }
    }

    const onSubmitLogin = async e => {
        e.preventDefault()
        if (!login.identification || !login.password) {
            console.log('falta algun dato');
        } else {
            const url = '/api/authenticate'

            try {
                const response = await axios.post(url, login)
                console.log(response);
                if(response.data.status === 'ok') {
                    sessionStorage.setItem('token', response.data.id)
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
                    <RegisterAll changeRegister={changeRegister} ChangeText={ChangeText} onSubmitRegister={onSubmitRegister} user={user}/>
                :
                    <div className="content">

                        <div className="diente1"></div>
                        <div className="form">
                            <h2>REGISTRO</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis</p>
                            <Registro changeRegister={changeRegister} ChangeText={ChangeText} user={user}/>
                        </div>
                        <div className="linea"></div>
                        <div className="form">
                            <h2>INGRESO</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis</p>
                            <Ingreso onSubmitLogin={onSubmitLogin} ChangeTextLogin={ChangeTextLogin}/>
                        </div>
                        <div className="diente2"></div>

                    </div>
            }

            <style jsx>{`
                
                .content {
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    grid-template-columns: 1fr 2fr 2px 2fr 1fr;
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
