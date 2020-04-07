import React, { useState } from 'react'
import PagoFisico from '../../pagos/PagoFisico';
import axios from 'axios'
import PagoVirtual from '../../pagos/PagoVirtual';

const BillingUser = (props) => {

    const [activeFisico, setActiveFisico] = useState(false)
    const [activeVirtual, setActiveVirtual] = useState(false)

    const changeFisico = () => {
        setActiveFisico(!activeFisico)
    }

    const changeVirtual = () => {
        setActiveVirtual(!activeVirtual)
    }

    return (
        <section>
            {
                activeFisico
                ?
                    <PagoFisico changeFisico={changeFisico}/>
                :
                    ''
            }
            {
                activeVirtual
                ?
                    <PagoVirtual changeVirtual={changeVirtual}/>
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
                <button onClick={changeVirtual}>Virtual</button>
                <button onClick={changeFisico}>Físico</button>
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
