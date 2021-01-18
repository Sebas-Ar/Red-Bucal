import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import moment from "moment";
import axios from "axios";

const InfoAdmin = (props) => {


    const [info, setInfo] = useState({})

    useEffect(() => {
        let inf = {}
        inf.identificationChange = props.data.identification
        if (moment(props.data.birthdate).locale("es").format('LL') === 'Invalid date') {
            inf.birthdate = props.data.birthdate
        } else {
            inf.birthdate = moment(props.data.birthdate).locale("es").format('LL')
        }
        inf.phone = props.data.phone
        inf.adress = props.data.adress
        inf.email = props.data.email
        inf.identification = props.data.identification
        setInfo(inf)
    }, []);

    const onchange = (e) => {
        setInfo(Object.assign({}, info, {[e.target.name]: e.target.value}))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const url = '/api/editUserData'
        try {

            const result = await axios.put(url, info)
            if (result.data.status) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Información actualizada',
                    showConfirmButton: false,
                    timer: 1000
                })
                props.changeData(result.data.data);
            }
            
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <form onSubmit={onSubmit}>
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
                ESTADO: <br />
                <p>{props.data.state ? "ACTIVO" : "INACTIVO"}</p>
            </label>
            <label>
                CEDULA: <br />
                <input type="text" name="identificationChange" value={info.identificationChange} onChange={onchange}/>
            </label>
            <label>
                FECHA DE NACIMIENTO: <br />
                <input type="text" name="birthdate" value={info.birthdate} onChange={onchange}/>
            </label>
            <label>
                CELULAR: <br />
                <input type="number" name="phone" value={info.phone} onChange={onchange}/>
            </label>
            <label>
                DIRECCIÓN: <br />
                <input type="text" name="adress" value={info.adress} onChange={onchange}/>
            </label>
            <label>
                CORREO: <br />
                <input type="email" name="email" value={info.email} onChange={onchange}/>
            </label>
            <button>Actualizar</button>

            <style jsx>{`
                
                form {
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
                    align-self: center;
                    margin-top: 10px;
                    border: none;
                    background: var(--mainColor);
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .list {
                    position: relative;
                    padding-left: 15px;
                }

                .list:before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 5px;
                    transform: translateY(-50%);
                    height: 5px;
                    width: 5px;
                    background-color: var(--mainColor);
                    border-radius: 50%;
                }

                @media screen and (max-width: 500px) {

                    form {
                        grid-template-columns: 1fr;
                        margin: 50px 0 0 100px;
                    }

                }
                
            `}</style>
        </form>
    )
}

export default InfoAdmin
