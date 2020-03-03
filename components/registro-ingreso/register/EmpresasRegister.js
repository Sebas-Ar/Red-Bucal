import React from 'react'

const EmpresasRegister = () => {
    return (
        <form>
            <div className="nombre">
                <div className="colorAzul"></div>
                <input type="text" placeholder="NOMBRE DE LA EMPRESA*" />
            </div>
            <div className="id">
                <div className="colorAzul"></div>
                <input type="text" placeholder="ID*" />
            </div>
            <div>
                <div className="colorAzul"></div>
                <input type="text" placeholder="DIRECCIÓN DE LA EMPRESA*" />
            </div>
            <br/>
            <div>
                <div className="colorAzul"></div>
                <input type="text" placeholder="TELÉFONO DE EMPRESA" />
            </div>
            <div className="correo">
                <div className="colorAzul"></div>
                <input type="text" placeholder="CORREO ELECTRÓNICO" />
            </div>
            <div className="download">
                <div className="colorAzul"></div>
                <p>DESCARGAR PLANTILLA DE REGISTRO PARA EMPLEADOS</p>
            </div>
            <br/>
            <div className="upload">
                <div className="colorAzul"></div>
                <p>SUBIR PLANTILLA DE REGISTRO PARA EMPLEADOS</p>
            </div>
            <div className="select">
                <div className="colorAzul"></div>
                <select name="">
                    <option value="">¿Como supo ne nosotoros?</option>
                </select>
            </div>

            <button>ENTRAR
                <svg viewBox="0 0 512 512">
                <path d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z" />
            </svg>
            </button>

            <style jsx>{`

                form {
                    display: grid;
                    grid-template-columns: 1fr 20px 1fr;
                    margin-bottom: 100px;
                }

                .nombre, .id, .correo, .select {
                    grid-column: 1/4;
                }

                .upload {
                    background-color: var(--puntoRojo);
                    cursor: pointer;
                }

                .download {
                    background-color: var(--puntoAzul);
                    cursor: pointer;
                }

                p {
                    font-size: 12px;
                    margin: 10px;
                    text-align: center;
                    color: white;
                }

                form > div {
                    margin: 10px 0;
                }
                
                div {
                    display: grid;
                    grid-template-columns: 5px 1fr;
                    border: 1px solid #33333322;
                    border-left: none;
                }    

                .colorAzul {
                    background-color: var(--puntoAzul);
                }

                select {
                    color: #33333399;
                }

                input {
                    border: none;
                    outline: none;
                    margin-left: 5px;
                    padding: 20px 0;
                }

                input:focus {
                    transform: scale(1.01);
                    font-size: 12px;
                    box-shadow: 4px 5px 10px -2px #33333344;
                }

                input::-webkit-input-placeholder {
                    color: #33333399;
                }

                button {
                    grid-column: 1/4;
                    border: none;
                    background: none;
                    height: 30px;
                    width: 140px;
                    outline: none;
                    justify-self: center;
                    align-self: center;
                    color: #333333aa;
                    font-weight: 900;
                    cursor: pointer;
                    margin-top: 30px;
                }

                svg {
                    height: 25px;
                    transform: translateY(20%);
                    margin-left: 10px;
                    fill: var(--puntoRojo)
                }
                
            `}</style>
        </form>
    )
}

export default EmpresasRegister
