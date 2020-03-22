import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import Layout from '../components/layout/Layout'
import Registro from '../components/registro-ingreso/Registro'
import RegisterAdmin from '../components/registro-ingreso/RegisterAdmin'
import axios from "axios"



const Ingresar = () => {


    const [register, setregister] = useState(false)
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({});

    const changeRegister = () => {
        setregister(!register);
    }

    const ChangeText = e => {
        setUser(Object.assign({}, user, { [e.target.name]: e.target.value }))
    }

    const router = useRouter()

    const onSubmitPersonalRegister = async e => {
        e.preventDefault()
        
        let validate = true
        let objectErrors = {}

        if (!user.name) {/* ya */
            objectErrors = Object.assign({}, objectErrors, { errorName: 'falta el nombre' })
            validate = false
        }

        if (!user.lastname) {/* ya */
            objectErrors = Object.assign({}, objectErrors, { errorlastname: 'falta el apellido' })
            validate = false
        }

        if (!user.adress) {/* ya */
            objectErrors = Object.assign({}, objectErrors, { erroradress: 'falta la direccion' })
            validate = false
        }

        if (!user.phone) {/* ya */
            objectErrors = Object.assign({}, objectErrors, { errorphone: 'falta el teléfono' })
            validate = false
        }

        if (!user.email) {/* ya */
            objectErrors = Object.assign({}, objectErrors, { erroremail: 'falta el email' })
            validate = false
        }

        if (!user.password) {
            objectErrors = Object.assign({}, objectErrors, { errorpassword: 'falta la contraseña' })
            validate = false
            setregister(false)
        }

        if (user.passwordRepeat) {/* ya */
            if (user.password !== user.passwordRepeat) {
                objectErrors = Object.assign({}, objectErrors, { errorpasswordRepeat: 'las contraseñas no coinciden' })
                validate = false
            }
        } else {
            objectErrors = Object.assign({}, objectErrors, { errorpasswordRepeat: 'falta repetir la contraseña' })
            validate = false
        }

        if (user.identification) {/* ya */

            const array = Array.from(user.identification)

            if ((array[1] !== '-') || (array[5] !== '-')) {
                objectErrors = Object.assign({}, objectErrors, { erroridentification: 'la cedula debe tener la forma 1-111-111' })
                validate = false
            }

        } else {
            objectErrors = Object.assign({}, objectErrors, { erroridentification: 'falta la cedula de ciudadania' })
            validate = false
        }

        if (!user.day) {
            objectErrors = Object.assign({}, objectErrors, { errorday: 'falta el dia' })
            validate = false
        }

        if (!user.month) {
            objectErrors = Object.assign({}, objectErrors, { errormonth: 'falta el mes' })
            validate = false
        }

        if (!user.year) {
            objectErrors = Object.assign({}, objectErrors, { erroryear: 'falta el año' })
            validate = false
        }

        setErrors(objectErrors)

        if (validate) {
            const url = '/api/admin'

            try {
                const response = await axios.post(url, user)
    
                if (response.data.status === 'ok') {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Usuario registrado satisfactoriamente',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    router.push('/master')
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: 'Ha ocurrido un problema, revisa los datos',
                        showConfirmButton: false,
                        timer: 1000
                    })

                    const message = response.data.message

                    if (message === 'el correo es invalido') {

                        objectErrors = Object.assign({}, objectErrors, { erroremail: message })

                    } else if (message === 'El correo ya ha sido registrado') {

                        objectErrors = Object.assign({}, objectErrors, { erroremail: message })

                    } else if (message === 'La cedula de ciudadania ya ha sido registrada') {

                        objectErrors = Object.assign({}, objectErrors, { erroridentification: message })

                    }

                    setErrors(objectErrors)
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Falta algún dato',
                showConfirmButton: false,
                timer: 1000
            })
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
                        errors={errors}
                    />
                    :
                    <div className="content">

                        <div className="diente1"></div>
                        <div className="form">
                            <h2>REGISTRO</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis</p>
                            <Registro changeRegister={changeRegister} ChangeText={ChangeText} user={user} errorsBusiness={{}} errors={errors}/>
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
