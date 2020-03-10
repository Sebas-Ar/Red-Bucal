import React from 'react'

const EmpresasRegister = (props) => {

    
    return (
        <form onSubmit={(e) => {props.onSubmitBusinessRegister(e)}}>
            <div className="nombre">
                <div className="colorAzul"></div>
                <input type="text" onChange={props.onChangeBusiness} name="businessName" placeholder="NOMBRE DE LA EMPRESA*" />
            </div>
            <div className="id">
                <div className="colorAzul"></div>
                <input type="text" onChange={props.onChangeBusiness} name="NIT" value={props.business.NIT} placeholder="NIT*" />
            </div>
            <div>
                <div className="colorAzul"></div>
                <input type="text" onChange={props.onChangeBusiness} name="businessAdress" placeholder="DIRECCIÓN DE LA EMPRESA*" />
            </div>
            <br/>
            <div>
                <div className="colorAzul"></div>
                <input type="text" onChange={props.onChangeBusiness} name="businessPhone" placeholder="TELÉFONO DE EMPRESA" />
            </div>
            <div className="correo">
                <div className="colorAzul"></div>
                <input type="text" onChange={props.onChangeBusiness} name="businessMail" placeholder="CORREO ELECTRÓNICO" />
            </div>
            <a href="/PLANTILLA-DE-REGISTRO-PARA-EMPLEADOS.xlsx" download="PLANTILLA-DE-REGISTRO-PARA-EMPLEADOS.xlsx">
                <div className="download">
                    <div className="colorAzul"></div>
                    <p>DESCARGAR PLANTILLA DE REGISTRO PARA EMPLEADOS</p>
                </div>
            </a>
            <br/>
            <div className="upload">
                <div className="colorAzul"></div>
                <label>{props.business.data ? 'PLANTILLA CARGADA' : 'SUBIR PLANTILLA DE REGISTRO PARA EMPLEADOS'}
                    <input className="uploadInput" type="file" onChange={(e) => {props.readExcel(e)}}/>
                </label>
            </div>
            <div className="select">
                <div className="colorAzul"></div>
                <select onChange={props.onChangeBusiness} name="know">
                    <option value="0">¿Cómo supo de nosotoros?</option>
                    <option value="1">Página Web</option>
                    <option value="2">Recomendación</option>
                    <option value="3">Asesor Comercial</option>
                    <option value="4">Otro</option>
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

                a {
                    align-self: center;
                    text-decoration: none;
                }

                .upload {
                    background-color: var(--puntoRojo);
                    cursor: pointer;
                    position: relative;
                }

                label {
                    position: relative;
                    font-size: 12px;
                    margin: 10px;
                    text-align: center;
                    color: white;
                    cursor: pointer;
                }

                .uploadInput {
                    position: absolute;
                    top:0;
                    height: 0px;
                    width: 0px; 
                    opacity: 0;
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
