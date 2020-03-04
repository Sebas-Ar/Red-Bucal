import React from 'react'

const BillingUser = (props) => {
    return (
        <section>
            <label className="type">
                TIPO DE PLAN:
                <p>{props.data.plan ? 'PERSONAL' : 'EMPRESARIAL'}</p>
            </label>
            <div></div>
            <label>
                FECHA DE INICIO:
                <p>>----------</p>
            </label>
            <label>
                FECHA DE FINALIZACIÓN:
                <p>----------</p>
            </label>
            <label>
                RENOVACIÓN: <br/> <br/>
                <button>Web</button>
                <button>Fisico</button>
            </label>

            <style jsx>{`
                
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
