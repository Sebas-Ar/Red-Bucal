import React from 'react'

const Respaldo = () => {
    return (
        <div className="content">
            <h2>RESPALDO</h2>
            <div className="linea"></div>
            <p>En alianza con nosotros a través de estas clínicas hemos logrado generar el valor agregado que caracteriza nuestra visión conectado así las sonrisas con una salud bucal más responsable.</p>
            <div className="imagenes">
                <img src="/img/logo1.png" alt=""/>
                <img src="/img/logo2.png" alt=""/>
                <img src="/img/logo3.png" alt=""/>
                <img src="/img/logo4.png" alt=""/>
                <img src="/img/logo5.png" alt=""/>
            </div>
            <div className="dientes"></div>
            
            <style jsx>{`
                
                .content {
                    margin-top: 50px;
                    display: grid;
                    grid-template-rows: 1fr 1.5fr 1.5fr;
                }
                img {
                    height: 100px;
                }

                .linea, h2 {
                    grid-row: 1/2;
                    grid-column: 1/2;
                }

                .linea {
                    position: relative;
                    background: #66666699;
                    height: 2px;
                    width: 350px;
                    justify-self: flex-end;
                    align-self: center;
                }

                .linea:before {
                    content: "";
                    position: absolute;
                    transform: translateY(-45%);
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: var(--secondColor);
                }

                h2 {
                    align-self: center;
                    justify-self: center;
                    color: var(--mainColor);
                    font-weight: 700;
                    font-size: 60px;
                }

                p {
                    grid-column: 1/2;
                    grid-row:2/3;
                    justify-self: center;
                    align-self: center;
                    text-align: center;
                    font-weight: 500;
                    width: 700px;
                    color: var(--mainColorClaro);
                }

                .imagenes {
                    grid-column: 1/2;
                    grid-row:3/4;
                    justify-self: center;
                }

                .dientes {
                    grid-column: 1/2;
                    grid-row:2/4;
                    background-image: url("/img/diente-horizontal.png");
                    background-size: auto 120%;
                    background-position: right;
                    width: 90px;
                }

            `}</style>
        </div>
    )
}

export default Respaldo
