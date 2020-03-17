import React, { useState } from 'react'
import axios from "axios";

const BillingUser = (props) => {

    const payWeb = async () => {
        console.log(result)
    }

    return (
        <section>
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
                RENOVACIÓN: <br/> <br/>
                <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                    <input name="merchantId" type="hidden" value="508029" />
                    <input name="accountId" type="hidden" value="512321" />
                    <input name="description" type="hidden" value="Compra suscripcion mensual" />
                    <input name="referenceCode" type="hidden" value="thisIsRefenceCode" />
                    <input name="amount" type="hidden" value="11" />
                    <input name="tax" type="hidden" value="0" />
                    <input name="taxReturnBase" type="hidden" value="0" />
                    <input name="currency" type="hidden" value="USD" />
                    <input name="signature" type="hidden" value="59e71ee5377888a9f06c69fc3d520783" />
                    <input name="test" type="hidden" value="1" />
                    <input name="buyerEmail" type="hidden" value="test@test.com" />
                    <input name="responseUrl" type="hidden" value="http://157.230.6.176:3000/" />
                    <input name="confirmationUrl" type="hidden" value="http://157.230.6.176:3000/" />
                    <button type="submit">Web</button>
                </form>
                <button>Fisico</button>
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

            label {
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
