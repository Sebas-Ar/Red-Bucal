import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Loading from '../loading/Loading';

const PagoVirtual = (props) => {

    const [data, setData] = useState({
        cardType: '-'
    });
    const [err, setErr] = useState({})
    const [load, setLoad] = useState(false)

    const onChange = (e) => {
        setData(Object.assign({}, data, {[e.target.name]: e.target.value}))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoad(true)
        let enable = true

        const url = "https://secure.paguelofacil.com//rest/processTx/AUTH_CAPTURE/";

        const { email, phone, address, cardNumber, expMonth, expYear, cvv, firstName, lastName, cardType } = data

        let payload = {
            cclw: '8322FDB3B17351C9B9C8EA8FE01874AA7F31F3BAC4695E9996FFC88912AB0E6D8938B03CA4935DCE3D4EAE90D67E09C43D76B583318C2872C62D03D87A8A7B60',
            amount: 3.50,//El monto o valor total de la transacción a realizar. NO PONER
            taxAmount: 1.0,
            email,//String MaxLength:100 Email del
            phone,//Numeric MaxLength:16 Teléfono del Tarjeta habiente,
            address,//String MaxLength:100 Dirección del Tarjeta,
            concept: '-52',//MaxLength:150 ;Es la descripción o el motivo de la transacción en proceso
            description: '52',//MaxLength:150 ;Es la descripción o el motivo de la transacción en proceso
            lang: 'ES', //EN
            customFieldValues:[ 
                {
                    id: "idOrder",
                    nameOrLabel: "Nro de Orden",
                    value: "OD-2341233"
                },
                {
                    id: "idUser",
                    nameOrLabel: "User",
                    value: "351234"
                }
            ],
            cardInformation: {
                cardNumber,
                expMonth,//Mes de expiración de la tarjeta, siempre 2 dígitos
                expYear,//Numeric Ej.:02 Año de expiración de la tarjeta.
                cvv,//Código de Seguridad de la tarjeta Numeric MaxLength:3
                firstName,//String MaxLength:25 Nombre del tarjeta habiente
                lastName,//String MaxLength:25 Apellido del Tarjeta habiente
                cardType
            }
        }

        if (cardType !== '-' && firstName && lastName && phone && address && email && cardNumber && expMonth && cvv && expYear){
            try {
                const result = await axios.post(
                    url, 
                    payload, 
                    {
                        headers: {
                            "authorization": 'QgVVaUukMlhuk1XtEGlLqbOtHhoQu349',
                            "content-type": 'application/json'
                        }
                    }
                );

                if(result.data.success) {

                    let response

                    if (props.type === 'user') {

                        const URL_EDIT_USER_SERVICE = '/api/editUser'
                        response = await axios.put(URL_EDIT_USER_SERVICE, {
                            identification: props.data.identification || props.data.RUC,
                            state: true,
                        })
                        
                    } else if (props.type === 'empresa') {
                        
                        const URL_EDIT_BUSSINES_SERVICE = '/api/editBusiness'
                        response = await axios.put(URL_EDIT_BUSSINES_SERVICE, {
                            identification: props.data.RUC,
                            state: true,
                            identifications: props.data.identifications
                        })

                    }
                    

                    props.setData(response.data.data)

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Pago realizado Satisfactoriamente',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    props.changeVirtual()
                    enable = false

                } else {
                    console.log(result.data)
                    const { code } = result.data.headerStatus

                    let errCode = {}

                    if (code === 605 || code == 607) errCode = Object.assign({}, errCode, {numberCard: 'Número no valido*'})
                    if (code === 606) errCode = Object.assign({}, errCode, {securityCode: 'Código invalido*'})
                    if (code === 608) errCode = Object.assign({}, errCode, {email: 'Email invalido*'})//INVALID EMAIL
                    if (code === 609) errCode = Object.assign({}, errCode, {firstName: 'nombre invalido*'})//INVALID NAM
                    if (code === 610) errCode = Object.assign({}, errCode, {lastName: 'apellido invalido*'})//INVALID LAST NAM
                    if (code === 611) errCode = Object.assign({}, errCode, {phone: 'celular invalido*'})//INVALID PHONE NUMBE

                    setErr(errCode)
                }

            } catch (error) {
                console.log(error)
            }
        } else {

            let errFields = {}

            if (cardType === '-') errFields = Object.assign({}, errFields, {type: 'Campo vacio*'})
            if (!firstName) errFields = Object.assign({}, errFields, {firstName: 'Campo vacio*'})
            if (!lastName) errFields = Object.assign({}, errFields, {lastName: 'Campo vacio*'})
            if (!phone) errFields = Object.assign({}, errFields, {phone: 'Campo vacio*'})
            if (!address) errFields = Object.assign({}, errFields, {address: 'Campo vacio*'})
            if (!email) errFields = Object.assign({}, errFields, {email: 'Campo vacio*'})
            if (!cardNumber) errFields = Object.assign({}, errFields, {numberCard: 'Campo vacio*'})
            if (!expMonth) errFields = Object.assign({}, errFields, {month: 'Campo vacio*'})
            if (!cvv) errFields = Object.assign({}, errFields, {securityCode: 'Campo vacio*'})
            if (!expYear) errFields = Object.assign({}, errFields, {year: 'Campo vacio*'})

            setErr(errFields)
        }
        if (enable) setLoad(false)
    }
/*  */
    return (
        <div className="content">
            <form onSubmit={onSubmit}>

                <svg onClick={() => { props.changeVirtual() }} viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
                </svg>

                <h3>PAGO VIRTUAL</h3>

                    <label>
                        Nombre: <br />
                        <input type="text" name="firstName" onChange={onChange}/>
                        {err.firstName ? <p>{err.firstName}</p> : ''}
                    </label>
                    <label>
                        Apelido: <br />
                        <input type="text" name="lastName" onChange={onChange}/>
                        {err.lastName ? <p>{err.lastName}</p> : ''}
                    </label>
                    <label>
                        Celular: <br />
                        <input type="text" name="phone" onChange={onChange}/>
                        {err.phone ? <p>{err.phone}</p> : ''}
                    </label>
                    <label>
                        dirección: <br />
                        <input type="text" name="address" onChange={onChange}/>
                        {err.address ? <p>{err.address}</p> : ''}
                    </label>
                    <label>
                        Email: <br />
                        <input type="text" name="email" onChange={onChange} />
                        {err.email ? <p>{err.email}</p> : ''}
                    </label>
                    <label>
                        Tipo de Tarjeta: <br/>
                        <select name="cardType" onChange={onChange}>
                            <option value="-">-</option>
                            <option value="VISA">VISA</option>
                            <option value="MASTERCARD">MASTERCARD</option>
                        </select>
                        {err.type ? <p>{err.type}</p> : ''}
                    </label>
                    <label>
                        Numero de tarjeta: <br />
                        <input type="text" name="cardNumber" onChange={onChange} placeholder="ej. 4916000000000000"/>
                        {err.numberCard ? <p>{err.numberCard}</p> : ''}
                    </label>
                    <label>
                        Año de expiración: <br />
                        <input type="text" name="expYear" onChange={onChange} placeholder="ej. 25"/>
                        {err.year ? <p>{err.year}</p> : ''}
                    </label>
                    <label>
                        Mes de expiración: <br />
                        <input type="text" name="expMonth" onChange={onChange} placeholder="ej. 02"/>
                        {err.month ? <p>{err.month}</p> : ''}
                    </label>
                    <label>
                        CVV: <br />
                        <input type="text" name="cvv" onChange={onChange} placeholder="ej. 003"/>
                        {err.securityCode ? <p>{err.securityCode}</p> : ''}
                    </label>

                    <button type="submit" disabled={load}>
                        {
                        load 
                        ? 
                            <Loading />
                        :
                            'Pagar'
                        }
                    </button>


            </form>

            <style jsx>{`
                
                .content {
                    z-index: 1000;
                    background: #33333366;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    width: 100%;
                    height: 100vh;
                }

                section {
                    display: grid;
                    grid-template-rows: 30px 1fr 1fr;
                }

                svg {
                    width: 30px;
                    color: var(--puntoRojo);
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    cursor: pointer;
                    transition: transform .5s;
                }

                svg:hover {
                    transform: scale(1.1);
                }

                h3 {
                    margin: 10px 0;
                    text-align: center;
                    font-weight: 400;
                    grid-column: 1/3;
                }
                
                form {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    position: relative;
                    background: white;
                    border-radius: 30px;
                    padding: 30px;
                }

                label {
                    margin: 10px 10px;
                    color: var(--mainColor);
                    font-weight: 600;
                    position: relative
                }

                p {
                    position: absolute;
                    color: var(--puntoRojo);
                    width: 100%;
                    text-align: center;
                    font-size: 12px;
                }

                input, select {
                    displya: inline-block;
                    outline: none;
                    border: 1px solid #33333322;
                    border-radius: 4px;
                    padding: 5px;
                }

                select {
                    width: 100%;
                }

                input::placeholder {
                    color: var(--mainColorClaro);
                }

                button {
                    grid-column: 1/3;
                    align-self: center;
                    justify-self: center;
                    margin-top: 10px;
                    border: none;
                    background: ${load ? 'none' : 'var(--mainColor)'};
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: ${load ? 'auto' : 'pointer'};
                }
            
            `}</style>
        </div>
    )
}

export default PagoVirtual
