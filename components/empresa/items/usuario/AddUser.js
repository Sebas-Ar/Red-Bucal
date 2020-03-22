import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from "axios";

const AddUser = (props) => {

    const [data, setData] = useState({});

    const onChange = (e) => {
        setData(Object.assign({}, data, { [e.target.name]: e.target.value, identifications: props.identifications, RUC: props.RUC}))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const url = '/api/addUserBusiness'
        const result = await axios.post(url, data)
        if (result.data.status) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Historial actualizado',
                showConfirmButton: false,
                timer: 1000
            })
            props.changeData(result.data.data.value)
            props.changeAddUser()
        }

    }

    return (
        <div className="content">
            <form onSubmit={onSubmit}>
                <svg onClick={props.changeAddUser} viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
                </svg>
                <label>
                    NOMBRE: <br />
                    <input onChange={onChange} type="text" name="name" placeholder="" />
                </label>
                <label>
                    APELLIDO: <br />
                    <input onChange={onChange} type="text" name="lastname" placeholder="" />
                </label>
                <label>
                    CEDULA: <br />
                    <input onChange={onChange} type="text" name="identification" placeholder="" />
                </label>
                <label>
                    TELEFÓNO: <br />
                    <input onChange={onChange} type="number" name="phone" placeholder="" />
                </label>
                <label>
                    DIRECCIÓN: <br />
                    <input onChange={onChange} type="text" name="adress" placeholder="" />
                </label>
                <label>
                    FECHA DE NACIMIENTO: <br />
                    <input onChange={onChange} type="text" name="birthdate" placeholder="" />
                </label>
                <label>
                    CORREO: <br />
                    <input onChange={onChange} type="email" name="email" placeholder="" />
                </label>
                <br />
                <button >Agregar</button>
            </form>

            <style jsx>{`

                .content {
                    top: 0;
                    left: 0;
                    position: fixed;
                    background: #33333388;
                    height: 100vh;
                    width: 100%;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }

                svg {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 30px;
                    color: var(--puntoRojo);
                    margin: 20px;
                    cursor: pointer;
                }
                    
                form {
                    position: relative;
                    align-self: center;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    margin: 0 50px;
                    background: white;
                    padding: 30px;
                    border-radius: 30px;
                }    

                label {
                    margin: 20px;
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
                    cursor: pointer;
                    grid-column: 1/3;
                    justify-self: center;
                    outline: none;
                }
                    
                `}</style>
        </div>
    )
}

export default AddUser
