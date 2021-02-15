import React from 'react'

const InformationUser = (props) => {
    return (
        <section>
            <label>
                ESTADO:
                <p>{props.data.state ? 'ACTIVO' : 'INACTIVO'}</p>
            </label>
            <label className="type">
                CEDULA:
                <p>{props.data.identification}</p>
            </label>
            <label>
                {props.data.dependeOf ? 'DEPENDIENTE DE:' : 'LISTA DE DEPENDIENTES:'} <br/>
                {
                    props.data.dependeOf
                    ?
                        <p>{props.data.dependeOf}</p>
                    :
                        props.data.dependientes.length !== 0
                        ?                        
                            props.data.dependientes.map(item => (
                                <p className="list">{item}</p>
                            ))
                        :
                            <p>No existen dependientes</p>

                }
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

            .type {
                text-transform: uppercase;
            }
                
            `}</style>
        </section>
    )
}

export default InformationUser
