import React from 'react'

const Form = () => {

    const onSubmit = e => {
        e.preventDefault()
    }
    return (
        <form action="">
            <h4>Dejanos un mensaje</h4>
            <label className="nombre">Nombre
                <input type="text"/>
            </label>
            <label className="telefono">Telefono
                <input type="text"/>
            </label>
            <label className="email">Email
                <input type="text" />
            </label>
            <label className="mensaje">Mensaje
                <textarea></textarea>
            </label>

            <button type="submit" onClick={onSubmit}>Enviar</button>

            <style jsx>{`

                form {
                    height: 85%;
                    background: white;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 1fr 1fr 2fr 1fr;
                    border: 1px solid rgb(0, 165, 207, .1);
                    z-index: 10;
                    box-shadow: 0px 15px 12px 1px #33333355;
                }

                h4 {
                    grid-column: 1/3;
                    align-self: center;
                    margin: 0 20px;
                    color: var(--mainColor);
                }
                .mensaje {
                    grid-column: 1/3;
                    margin-top: 5px;
                }

                label {
                    margin: 0 20px;
                    display: grid;
                    grid-template-rows: 30px 1fr;
                    color: var(--mainColorClaro);
                    font-size: 14px;
                    font-weight: 500;
                }

                input, textarea {
                    display: block;
                    border: 1px solid #33333333;
                    border-radius: 4px;
                }   

                textarea {
                    
                }

                button {
                    color: white;
                    background: var(--puntoAzul);
                    margin: 0 20px;
                    align-self: center;
                    height: 40px;
                    border: 1px solid #33333333;
                    border-radius: 4px;
                    outline: none;
                    transition: background .3s;
                    cursor: pointer;
                }

                button:hover {
                    background: var(--botonesHover);
                }

                .email {
                    grid-column: 1/3;
                }
            
            `}</style>
        </form>
    )
}

export default Form
