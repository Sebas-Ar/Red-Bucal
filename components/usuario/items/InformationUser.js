import React from 'react'
import Out from '../../config/Out'

const InformationUser = (props) => {
    return (
       /*  props.storage ?
         */<section>
            <label>
                ESTADO:
                <p>{props.data.state ? 'ACTIVO' : 'INACTIVO'}</p>
            </label>
            <label>
                CEDULA:
                <p>{props.data.identification}</p>
            </label>
            <label>
                FECHA DE NACIMIENTO:
                <p>{props.data.birthdate}</p>
            </label>
            <label>
                CELULAR:
                <p>{props.data.phone}</p>
            </label>
            <label>
                DIRECCIÓN:
                <p>{props.data.adress}</p>
            </label>
            <label>
                CORREO:
                <p>{props.data.email}</p>
            </label>

            <style jsx>{`
                
            section {
                align-self: center;
                display: grid;
                grid-template-columns: 1fr 1fr;
                margin: 0 50px;
            }    

            label {
                margin: 10px 0;
                color: var(--mainColor);
                font-weight: 600;
            }

            p {
                color: var(--mainColorClaro);
            }
                
            `}</style>
        </section>
        /* :

        <Out /> */
    )
}

export default InformationUser
