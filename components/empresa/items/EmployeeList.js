import React, { useState, useEffect } from 'react'

const EmployeeList = (props) => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        setUsuarios(props.data.identification)
        console.log(usuarios);
    })

    return (
        <section>

            <div className="user">
                <div className="table">
                    <div className="cabecera">
                        <h5>USUARIO</h5>
                        <h5>ID</h5>
                        <h5>OPCIÓN</h5>
                    </div>
                    {
                        props.data.identifications ? props.data.identifications.map(user => (
                            <div className="content">
                                <p>{user.name}</p>
                                <p>{user.id}</p>
                                <div className="btns">
                                    <button className="selectionVer" >Ver</button>
                                    <br/>
                                    <button className="selectionEliminar" >Eliminar</button>
                                </div>
                            </div>
                        ))
                        :
                        ''
                    }
                    <div className="content">
                            <button className="agregar" >Agregar</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
            
                .btns {
                    display: grid;
                    grid-template-columns: 1fr 10px 1fr;
                }
                
                section {
                    height: 300px;
                    align-self: center;
                    margin: 0 50px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    overflow: auto;
                }

                form {
                    justify-self: center;
                    margin: 20px 0;
                }

                input::placeholder {
                    padding: 10px 0;
                    color: var(--mainColorClaro);
                    font-weight: 600;
                }

                input, button {
                    outline: none;
                    padding: 10px 10px;
                    border: 1px solid #33333344;
                }

                input {
                    color: var(--mainColor);
                    border-right: none; 
                    border-radius: 5px 0 0 5px;
                }

                .buscar {
                    border-left: none; 
                    cursor: pointer;
                    background-color: var(--mainColor);
                    color: white;
                    border-radius: 0 5px 5px 0;
                }

                .linea {
                    background: var(--puntoRojo);
                    grid-column: 1/3;
                }

                .user {
                    grid-column: 1/3;
                    padding-top: 20px;
                    width: 90%;
                    justify-self: center;
                }

                .table {
                    display: grid;
                    grid-template-rows: 1fr 1fr;
                }

                .cabecera, .content {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .cabecera {
                    text-align: center;
                }

                h5 {
                    color: var(--mainColor);
                }

                .content {
                    color: var(--mainColorClaro);
                    margin: 5px 0;
                }

                .selectionVer {
                    border: none;
                    background-color: var(--puntoAzul);
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color .5s;
                }

                .selectionEliminar {
                    border: none;
                    background-color: var(--puntoRojo);
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color .5s;
                }

                .selectionVer:hover, .agregar:hover {
                    background-color: var(--botonesHover);
                }

                .selectionEliminar:hover {
                    background-color: var(--botonesRegistro);
                }

                .agregar {
                    grid-column: 1/4;
                    border: none;
                    background-color: var(--puntoAzul);
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color .5s;
                    width: 100px;
                    justify-self: center;
                }

                
            `}</style>
        </section>
    )
}

export default EmployeeList
