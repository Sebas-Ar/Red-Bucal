import React, { useState, useEffect } from 'react'
import PagoFisico from '../../pagos/PagoFisico';
import PagoVirtual from '../../pagos/PagoVirtual';

const BillingUser = (props) => {

    const [activeFisico, setActiveFisico] = useState(false)
    const [activeVirtual, setActiveVirtual] = useState(false)
    const [dates, setDates] = useState({})

    useEffect(() => {

        if (props.data.start && props.data.end) {
            const {start, end} = props.data

            const startDate = new Date(start)
            const endDate = new Date(end)
            console.log(startDate)
            console.log(endDate)
    
            setDates({
                start: `${startDate.getDate()}-${startDate.getMonth() + 1}-${startDate.getFullYear()}`,
                end: `${endDate.getDate()}-${endDate.getMonth() + 1}-${endDate.getFullYear()}`
            })
        }


    }, [props.data])

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
                    <PagoVirtual changeVirtual={changeVirtual} data={props.data} setData={props.setData} type={'user'}/>
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
                <p>{props.data.start ? dates.start : '------------'}</p>
            </label>
            <label>
                FECHA DE FINALIZACIÓN:
                <p>{props.data.start ? dates.end : '------------'}</p>
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
