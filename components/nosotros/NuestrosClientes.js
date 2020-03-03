import React from 'react'

const NuestrosClientes = () => {
    return (
        <div className="content">
            <h2>NUESTROS CLIENTES</h2>
            <div className="linea"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus inventore iste voluptatibus delectus vel voluptates ad dolore officiis nulla id!</p>
            <div className="imagenes">
                <img src="/img/logo6.png" alt="" />
                <img src="/img/logo7.png" alt="" />
                <img src="/img/logo8.png" alt="" />
                <img src="/img/logo9.png" alt="" />
                <img src="/img/logo10.png" alt="" />
            </div>
            <div className="imagenes">
                <img src="/img/logo11.png" alt="" />
                <img src="/img/logo12.png" alt="" />
                <img src="/img/logo13.png" alt="" />
                <img src="/img/logo14.png" alt="" />
                <img src="/img/logo15.png" alt="" />
            </div>

            <style jsx>{`
                
                .content {
                    margin-top: 50px;
                    display: grid;
                    grid-template-rows: 1fr 1.5fr 1.5fr 1.5fr;
                }
                img {
                    width: 220px;
                }

                .linea, h2 {
                    grid-row: 1/2;
                    grid-column: 1/2;
                }

                .linea {
                    position: relative;
                    background: #66666699;
                    height: 2px;
                    width: 250px;
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
                    justify-self: center;
                }
                
            `}</style>
        </div>
    )
}

export default NuestrosClientes
