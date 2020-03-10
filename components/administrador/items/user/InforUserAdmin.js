import React from 'react'

const InfoAdmin = (props) => {
    return (
        <section>
            <label>
                ESTADO: <br />
                <input type="text" value={props.data.state ? "ACTIVO" : "INACTIVO"} />
            </label>
            <label>
                CEDULA: <br />
                <input type="number" name="" value={props.data.identification} />
            </label>
            <label>
                FECHA DE NACIMIENTO: <br />
                <input type="text" name="" id="" value={props.data.birthdate} />
            </label>
            <label>
                CELULAR: <br />
                <input type="number" name="" value={props.data.phone} />
            </label>
            <label>
                DIRECCIÓN: <br />
                <input type="text" name="" value={props.data.adress} />
            </label>
            <label>
                CORREO: <br />
                <input type="email" name="" value={props.data.email} />
            </label>
            <button>Actualizar</button>

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

            input {
                border: 1px solid #33333322;
                border-radius: 4px;
                padding: 5px;
            }

            input::placeholder {
                color: var(--mainColorClaro);
            }

            button {
                margin-top: 10px;
                border: none;
                background: var(--mainColor);
                width: 100px;
                height: 30px;
                color: white;
                border-radius: 5px;
            }
                
            `}</style>
        </section>
    )
}

export default InfoAdmin
