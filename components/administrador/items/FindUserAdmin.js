import React from 'react'

const FindUserAdmin = (props) => {


    const onSubmitID = e => {   
        props.ChangeType('persona')
        console.log(props.type);
        e.preventDefault()
    } 

    const onSubmitNIT = e => {
        props.ChangeType('empresa')
        e.preventDefault()
    } 

    return (
        <section>

            <form>
                <input type="number" name="id" placeholder="ID USUAIRO" />
                <button className="buscar" type="submit" onClick={onSubmitID}>Buscar</button>
            </form>
            <form>
                <input type="number" name="id" placeholder="NIT EMPRESA" />
                <button className="buscar" type="submit" onClick={onSubmitNIT}>Buscar</button>
            </form>

            <div className="linea"></div>

            {
                props.type === 'persona' 
                    ?
                    <div className="user">
                        <div className="table">
                            <div className="cabecera">
                                <h5>USUARIO</h5>
                                <h5>ID</h5>
                                <h5>OPCIÓN</h5>
                            </div>
                            <div className="content">
                                <p>usuario #1</p>
                                <p>123456789</p>
                                <button className="selection" onClick={() => {props.ChangeUser(5)}}>Selecctionar</button>
                            </div>
                        </div>
                    </div>

                    : props.type === 'empresa'
                        ?
                        <div className="user">
                            <div className="table">
                                <div className="cabecera">
                                    <h5>EMPRESA</h5>
                                    <h5>NIT</h5>
                                    <h5>OPCIÓN</h5>
                                </div>
                                <div className="content">
                                    <p>empresa #1</p>
                                    <p>123456789</p>
                                    <button className="selection" onClick={() => { props.ChangeUser(5) }}>Selecctionar</button>
                                </div>
                            </div>
                        </div>
                        : ''
            }

            <style jsx>{`
                
                section {
                    align-self: center;
                    margin: 0 50px;
                    display: grid;
                    grid-template-rows: 1fr 2px 1fr;
                    grid-template-columns: 1fr 1fr;
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
                }

                .selection {
                    border: none;
                    background-color: var(--mainColorClaro);
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color .5s;
                }

                .selection:hover {
                    background-color: var(--mainColor);
                }
                
            `}</style>
        </section>
    )
}

export default FindUserAdmin
