import React from 'react'
import Form from './Form'

const LayoutForm = (props) => {
    return (
        <div className="content">
            
            <div className="amarillo"></div>
            <div className="text">
                <h3>CONTACTENOS</h3>
                <p>¿Por qué esperar a tener un problema para ir al odontólogo? <br/> <br/> ¡Es mejor prevenirlo! <br/> <br/> Red Bucal te ofrece diferentes alternativas para mantenerte en comunicación directa con nosotros y con nuestras Clínicas afiliadas.</p>
            </div>
            <Form />
            <div className="fondoAzul"></div>
            <div className="diente"></div>

            <style jsx>{`
                
                .content {
                    margin-top: 50px;
                    height: 450px;
                    widdth: 100%;
                    background-image: url(${props.fondo});
                    background-size: auto 120%;
                    background-repeat: no-repeat;
                    display: grid;
                    grid-template-columns: 1fr 4fr 3.5fr 1.5fr;
                }    

                .amarillo {
                    background-color: var(--amarillo);
                    background-image: url("/img/diente-form-fondo.png");
                    background-size: auto 100%;
                    background-repeat: no-repeat;
                    height: 170px;
                    margin-top: 90px;
                    align-items: center;
                }

                .fondoAzul {
                    background-color: var(--fondoAzul);
                    height: 85%;
                    grid-column: 4/5;
                    grid-row: 1/2;
                    border: 1px solid rgb(0, 165, 207, .1);
                    box-shadow: 0px 15px 12px 1px #33333355;  
                }

                .diente {
                    background-image: url(${props.diente});
                    background-size: 100% auto;
                    grid-column: 4/5;
                    grid-row: 1/2;  
                }

                .text {
                    display: grid;
                    grid-template-rows: 1fr 2fr;
                    justify-items: center;
                }

                h3 {
                    color: var(--mainColor);
                    font-size: 50px;
                    align-self: flex-end;
                }

                p {
                    margin-top: 30px;
                    text-align: center;
                    width: 260px;
                    color: var(--mainColorClaro);
                }

                
                
            `}</style>
        </div>
    )
}

export default LayoutForm
