import React from "react";

const NuestrosClientes = () => {
    return (
        <div className="content">
            <h2>NUESTROS CLIENTES</h2>
            <div className="linea"></div>
            <div className="imagenes">
                <img src="/img/logos/capital-bistro.png" alt="fallo" />
                <img src="/img/logos/casa-duran.png" alt="error" />
                <img src="/img/logos/clinilab.png" alt="error" />
                <img src="/img/logos/denti-clinica.jpg" alt="error" />

                <img src="/img/logos/grupo-lux.jpg" alt="error" />
                <img src="/img/logos/Panamerican.png" alt="error" />
                <img src="/img/logos/radimagen-logo.png" alt="error" />
                <img src="/img/logos/Seguros-vivir.jpg" alt="error" />
            </div>

            <style jsx>{`
                .content {
                    margin-top: 50px;
                    display: grid;
                }
                img {
                    width: 220px;
                }

                .linea,
                h2 {
                    margin: 3rem 0;
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
                    grid-row: 2/3;
                    justify-self: center;
                    align-self: center;
                    text-align: center;
                    font-weight: 500;
                    width: 700px;
                    color: var(--mainColorClaro);
                }

                .imagenes {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    justify-items: center;
                    align-items: center;
                    grid-row-gap: 1rem;
                    grid-column-gap: 1rem;
                    margin-bottom: 2rem;
                }

                @media screen and (max-width: 1077px) {
                    .imagenes {
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }

                @media screen and (max-width: 842px) {
                    .imagenes {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media screen and (max-width: 519px) {
                    .imagenes {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default NuestrosClientes;
