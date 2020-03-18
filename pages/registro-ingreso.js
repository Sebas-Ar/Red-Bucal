import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import readXlsxFile from 'read-excel-file'
import Layout from '../components/layout/Layout'
import Registro from '../components/registro-ingreso/Registro'
import Ingreso from '../components/registro-ingreso/Ingreso'
import RegisterAll from '../components/registro-ingreso/RegisterAll'
import axios from "axios"



const Ingresar = () => {


    const [register, setregister] = useState(true)
    const [user, setUser] = useState({})
    const [login, setLogin] = useState({});
    const [business, setBusiness] = useState({})
    const [errors, setErrors] = useState({});
    const [errorsBusiness, setErrorsBusiness] = useState({})


    const changeRegister = () => {
        setregister(!register);
    }


    const ChangeText = e => {
        setUser(Object.assign({}, user, { [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        let object = {}
        if (user.identification) {
            object = Object.assign({}, object, { RUC: user.identification })
        }
        if (user.password) {
            object = Object.assign({}, object, { password: user.password })
        }
        setBusiness(Object.assign({}, business, object))
    }, [user]);

    const ChangeTextLogin = e => {
        setLogin(Object.assign({}, login, { [e.target.name]: e.target.value }))
    }

    const onChangeBusiness = e => {
        setBusiness(Object.assign({}, business, { [e.target.name]: e.target.value }))
    }

    const onSubmitPersonalRegister = async e => {
        e.preventDefault()

        let checked = true
        let objectErrors = {}

        if (!user.name) {/* ya */
            objectErrors = Object.assign({}, objectErrors, { errorName: 'falta el nombre' })
            checked = false
        }

        if (!user.lastname) {/* ya */
            objectErrors = Object.assign({}, objectErrors, { errorlastname: 'falta el apellido' })
            checked = false
        }

        if (!user.adress) {/* ya */
            objectErrors = Object.assign( {}, objectErrors,  { erroradress: 'falta la direccion' })
            checked = false
        }

        if (!user.phone) {/* ya */
            objectErrors = Object.assign( {}, objectErrors,  { errorphone: 'falta el teléfono' })
            checked = false
        }

        if (!user.email) {/* ya */
            objectErrors = Object.assign( {}, objectErrors,  { erroremail: 'falta el email' })
            checked = false
        }

        if (!user.know) {/* ya */
            objectErrors = Object.assign( {}, objectErrors,  { errorknow: 'Por favor seleccione una opción' })
            checked = false
        }

        if (!user.password) {
            objectErrors = Object.assign( {}, objectErrors,  { errorpassword: 'falta la contraseña' })
            checked = false
            setregister(false)
        }

        if (user.passwordRepeat) {/* ya */
            if (user.password !== user.passwordRepeat) {
                objectErrors = Object.assign({}, objectErrors, { errorpasswordRepeat: 'las contraseñas no coinciden' })
                checked = false
            }
        } else {
            objectErrors = Object.assign( {}, objectErrors,  { errorpasswordRepeat: 'falta repetir la contraseña' })
            checked = false
        }

        if (user.identification) {/* ya */

            const array = Array.from(user.identification)

            if ((array[1] !== '-') && (array[5] !== '-')) {
                objectErrors = Object.assign({}, objectErrors, { erroridentification: 'la cedula debe tener la forma 1-111-111' })
                checked = false
            }

        } else {
            objectErrors = Object.assign( {}, objectErrors,  { erroridentification: 'falta la cedula de ciudadania' })
            checked = false
        }

        if (!user.day) {
            objectErrors = Object.assign({}, objectErrors, { errorday: 'falta el dia' })
            checked = false
        }

        if (!user.month) {
            objectErrors = Object.assign({}, objectErrors, { errormonth: 'falta el mes' })
            checked = false
        }

        if (!user.year) {
            objectErrors = Object.assign({}, objectErrors, { erroryear: 'falta el año' })
            checked = false
        }

        if (!user.checkbox) {
            objectErrors = Object.assign({}, objectErrors, { ckeckerror: 'debes aceptar los terminos y condiciones' })
            checked = false
        }

        setErrors(objectErrors)

        objectErrors = {}

        if (checked) {
            const url = '/api/users'
    
            try {
                const response = await axios.post(url,user)
                if (response.data.status === 'ok') {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Usuario registrado satisfactoriamente',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    sessionStorage.setItem('token', response.data.token)
                    setLogin({
                        identification: user.identification,
                        password: user.password
                    })
                    setUser({})
                    setregister(false)
                } else {

                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: 'Ha ocurrido un problema, revisa los datos',
                        showConfirmButton: false,
                        timer: 1000
                    })

                    const message = response.data.message

                    if ( message === 'el correo es invalido') {

                        objectErrors = Object.assign({}, objectErrors, { erroremail: message })

                    } else if ( message === 'El correo ya ha sido registrado') {

                        objectErrors = Object.assign({}, objectErrors, { erroremail: message })

                    } else if ( message === 'La cedula de ciudadania ya ha sido registrada') {

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

    const readExcel = async (e) => {
        try {
            const xmls = await readXlsxFile(e.target.files[0])
            setBusiness(Object.assign({}, business, { data: xmls }));
        } catch (error) {
            console.log(error);
            alert('archivo equivocado, por favor suba el archvo Excel')
        }
    }

    const onSubmitBusinessRegister = async e => {
        e.preventDefault()

        let checked = true
        let objectErrors = {}

        if (!business.businessName) {
            objectErrors = Object.assign({}, objectErrors, {errorName: 'falta el nombre'})
            checked = false
        }

        if (!business.RUC) {
        /* } else { */
            objectErrors = Object.assign({}, objectErrors, { errorRUC: 'falta el RUC' })
            checked = false
        }

        if (!business.businessAdress) {
            objectErrors = Object.assign({}, objectErrors, { errorAdress: 'falta la dirección' })
            checked = false
        }

        if (!business.businessPhone) {
            objectErrors = Object.assign({}, objectErrors, { errorPhone: 'falta el teléfono' })
            checked = false
        }

        if (!business.businessMail) {
            objectErrors = Object.assign({}, objectErrors, { errorEmail: 'falta el email' })
            checked = false
        }

        if (!business.know) {
            objectErrors = Object.assign({}, objectErrors, { errorKnow: 'Por favor seleccione una opción' })
            checked = false
        }

        if (!business.data) {
            objectErrors = Object.assign({}, objectErrors, { errorData: 'falta la plantilla de empleados' })
            checked = false
        }

        if (!business.checkbox) {
            objectErrors = Object.assign({}, objectErrors, { errorCheckbox: 'debes aceptar los terminos y condiciones' })
            checked = false
        }
        
        if (!business.password) {
            objectErrors = Object.assign({}, objectErrors, { errorPassword: 'falta la contraseña' })
            checked = false
            setregister(false)
        }

        if (business.passwordRepeat) {
            if (business.password !== business.passwordRepeat) {
                objectErrors = Object.assign({}, objectErrors, { errorPasswordRepeat: 'las contraseñas no coinciden' })
                checked = false
            }
        } else {
            objectErrors = Object.assign({}, objectErrors, { errorPasswordRepeat: 'falta la contraseña' })
            checked = false
        }

        setErrorsBusiness(objectErrors)

        objectErrors = {}

        if (checked) {
            const url = '/api/business'
            try {
                const response = await axios.post(url, business)
                if (response.data.status === 'ok') {

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Empresa registrada satisfactoriamente',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    sessionStorage.setItem('token', response.data.token)
                    setLogin({
                        identification: business.RUC,
                        password: business.password
                    })
                    setBusiness({})
                    setUser({})
                    setregister(false)

                } else {

                    const message = response.data.message

                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: message,
                        showConfirmButton: false,
                        timer: 1500
                    })


                    if ( message === 'El correo ya ha sido registrado' ) {

                        objectErrors = Object.assign({}, objectErrors, { errorEmail: message })

                    } else if ( message === 'el correo es invalido' ) {

                        objectErrors = Object.assign({}, objectErrors, { errorEmail: message })

                    } else if ( message === 'el RUC ya ha sido registrado' ) {

                        objectErrors = Object.assign({}, objectErrors, { errorRUC: message })

                    }

                    setErrorsBusiness(objectErrors)

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

    const router = useRouter()

    const onSubmitLogin = async e => {

        e.preventDefault()
        if (!login.identification || !login.password) {
            console.log('falta algun dato');
        } else {
            const url = '/api/authenticate'

            try {
                const response = await axios.post(url, login)
                console.log(response);
                if (response.data.status === 'ok_user') {
                    sessionStorage.setItem('token', response.data.id)
                    router.push('/usuario')
                } else {
                    if (response.data.status === 'ok_business') {
                        sessionStorage.setItem('token', response.data.id)
                        router.push('/empresa')
                    }
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
                    <RegisterAll
                        changeRegister={changeRegister}
                        ChangeText={ChangeText}
                        onSubmitBusinessRegister={onSubmitBusinessRegister}
                        onSubmitPersonalRegister={onSubmitPersonalRegister}
                        user={user}
                        onChangeBusiness={onChangeBusiness}
                        readExcel={readExcel}
                        business={business}
                        errors={errors}
                        errorsBusiness={errorsBusiness}
                    />
                    :
                    <div className="content">

                        <div className="diente1"></div>
                        <div className="form">
                            <h2>REGISTRO</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis</p>
                            <Registro 
                                changeRegister={changeRegister} 
                                ChangeText={ChangeText} 
                                user={user} 
                                errors={errors}
                                errorsBusiness={errorsBusiness}
                            />
                        </div>
                        <div className="linea"></div>
                        <div className="form">
                            <h2>INGRESO</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis</p>
                            <Ingreso 
                                onSubmitLogin={onSubmitLogin} 
                                ChangeTextLogin={ChangeTextLogin} 
                                login={login}
                            />
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
