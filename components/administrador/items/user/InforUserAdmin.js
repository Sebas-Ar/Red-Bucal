import React from 'react'
import moment from "moment";

const InfoAdmin = (props) => {
    return (
        <section>
            <label>
                ESTADO: <br />
                <p>{props.data.state ? "ACTIVO" : "INACTIVO"}</p>
            </label>
            <label>
                CEDULA: <br />
                <input type="text" name="" defaultValue={props.data.identification} />
            </label>
            <label>
                FECHA DE NACIMIENTO: <br />
                <input type="text" name="" id="" defaultValue={moment(props.data.birthdate).locale("es").format('LL')} />
            </label>
            <label>
                CELULAR: <br />
                <input type="number" name="" defaultValue={props.data.phone} />
            </label>
            <label>
                DIRECCIÓN: <br />
                <input type="text" name="" defaultValue={props.data.adress} />
            </label>
            <label>
                CORREO: <br />
                <input type="email" name="" defaultValue={props.data.email} />
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
