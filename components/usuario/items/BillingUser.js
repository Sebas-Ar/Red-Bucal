import React, { useState } from 'react'
import PagoFisico from '../../pagos/PagoFisico';
import axios from 'axios'

const BillingUser = (props) => {

    const [active, setActive] = useState(false)

    const change = () => {
        setActive(!active)
    }

    const pay = async () => {
        /* my IP : 192.168.1.11 */
        const url = ''
        const result = await axios({
            method: 'POST',
            url: 'https://sandbox.paguelofacil.com/rest/processTx/AUTH_CAPTURE',
            headers: {
                "authorization": 'WT5hTaUcpa4J3h4AmrZa2EXXJs8boUVa|DIRd852djHbq2j5Fca5VDUkDbExTBCVf',
                "content-type": 'application/json'
            },
            body: {
                cclw: 'D17B05A095489D1176560B4666A283454185F353F401D0201CC5C16F92535DF6B1DEBA18E79442CC0D6F75FD024207680AFBDFD6CF015478BF30CBEF9160A08D ',
                amount: 3.50,//El monto o valor total de la transacción a realizar. NO PONER
                taxAmount: 1.0,
                email: 'alambrito@correo.com',//String MaxLength:100 Email del
                phone: '60201236',//Numeric MaxLength:16 Teléfono del Tarjeta habiente,
                address: 'testing new address',//String MaxLength:100 Dirección del Tarjeta,
                concept: 'Nro-Order-523',//MaxLength:150 ;Es la descripción o el motivo de la transacción en proceso
                description: 'Nro-Order-523',//MaxLength:150 ;Es la descripción o el motivo de la transacción en proceso
                cardInformation: {
                    cardNumber: '4059310181757001',
                    expMonth: "12",//Mes de expiración de la tarjeta, siempre 2 dígitos
                    expYear: "32",//Numeric Ej.:02 Año de expiración de la tarjeta.
                    cvv: "003",//Código de Seguridad de la tarjeta Numeric MaxLength:3
                    firstName: 'alam',//String MaxLength:25 Nombre del tarjeta habiente
                    lastName: 'brito',//String MaxLength:25 Apellido del Tarjeta habiente
                    cardType: 'VISA'
                }
            }
        });
        /* axios.post(url,
            {
                headers: { 'cache-control': 'no-cache', 'Content-Type': 'application/x-www-form-urlencoded' },
            },
            {
            CCLW: 'D17B05A095489D1176560B4666A283454185F353F401D0201CC5C16F92535DF6B1DEBA18E79442CC0D6F75FD024207680AFBDFD6CF015478BF30CBEF9160A08D',
            txType: 'SALE',
            CMTN: '0',
            CDSC: 'test de compra',
            CCNum: '4059310181757001',
            ExpMonth: '03',
            ExpYear: '21',
            CVV2: '266',
            Name: 'MANUEL',
            LastName: 'ARIAS',
            Email: 'sebas_ariasd@hotmail.com',
            Address: 'colombia',
            Tel: '3203709957',
            Ip: '192.168.1.11',
            SecretHash: '0337f80c8a19dee560a5d3dc291c472c4e9be3e35becbff2847537c9f5e44989'
        },
        {
            json: true
        })*/
        alert(JSON.stringify(result.data))
    } 

    return (
        <section>
            {
                active
                ?
                    <PagoFisico change={change}/>
                :
                    ''
            }
            <label className="type">
                TIPO DE PLAN:
                <p>{props.data.plan ? 'EMPRESARIAL' : 'PERSONAL' }</p>
            </label>
            <div></div>
            <label>
                FECHA DE INICIO:
                <p>------------</p>
            </label>
            <label>
                FECHA DE FINALIZACIÓN:
                <p>------------</p>
            </label>
            <div>
                <span>RENOVACIÓN:</span> <br/> <br/>
                <button onClick={pay}>Web</button>
                <button onClick={change}>Fisico</button>
            </div>

            <style jsx>{`

                form {
                    display: inline-block;
                }
                
                section {
                    align-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    margin: 0 50px;
                }    

                label, span {
                    margin: 20px 0;
                    color: var(--mainColor);
                    font-weight: 600;
                }

                p {
                    color: var(--mainColorClaro);
                }

                button {
                    border: none;
                    outline: none; 
                    background-color: var(--mainColor);
                    padding: 10px;
                    cursor: pointer;
                    color: white;
                    border-radius: 4px;
                    margin-right: 10px;
                    width: 100px;
                }

                button:hover {
                    background: var(--colorSelect);
                    color: var(--botonesText);
                }
                
            `}</style>
        </section>
    )
}

export default BillingUser
