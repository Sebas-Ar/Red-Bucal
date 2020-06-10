import React from 'react'

const Portada = () => {
    return (
        <div className="content">
            <div className="arriba"></div>
            <div className="img"></div>
            <div className="color">
                <h1>
                    <span className="conectando">CONECTANDO</span>
                    <span className="sonrisas">SONRISAS</span>
                </h1>
                <h2>
                    CONFIANZA <span className="andpersand">&</span> SALUD
                </h2>
            </div>
            <div className="abajo"></div>

            <style jsx>{`
                :global(:root) {
                    --sizeLetter: 1;
                }

                .content {
                    background-image: url("/img/doctor-fondo.jpg");
                    background-size: auto 100%;
                    background-position: center;
                    height: 100vh;
                    width: 100%;
                    display: grid;
                    grid-template-rows: 1fr calc(250px * var(--sizeLetter)) 1fr;
                    max-height: 630px;
                }

                .arriba {
                    grid-column: 1/2;
                    grid-row: 1/2;
                }

                .img {
                    grid-row: 1/4;
                    grid-column: 1/2;
                    background-image: url("/img/doctor1.png");
                    background-size: auto 120%;
                    background-position: top;
                    background-repeat: no-repeat;
                    margin-left: 116px;
                    z-index: 10;
                    width: 560px;
                }

                .abajo {
                    grid-column: 1/2;
                    grid-row: 3/4;
                }

                .color {
                    position: relative;
                    background: var(--amarillo);
                    width: 90%;
                    border-radius: 0 30px 30px 0;
                    grid-row: 2/3;
                    grid-column: 1/2;
                    display: grid;
                    justify-items: flex-end;
                }

                h1 {
                    z-index: 20;
                    display: grid;
                    color: var(--mainColor);
                    height: 100%;
                    margin-right: 70px;
                }

                h2 {
                    z-index: 20;
                    position: absolute;
                    color: var(--mainColor);
                    right: 0;
                    font-weight: 300;
                    bottom: calc(-60px * var(--sizeLetter));
                    margin-right: 70px;
                    font-size: calc(45px * var(--sizeLetter));
                    transform: translate(calc(-100px * var(--sizeLetter)));
                }

                .andpersand {
                    font-weight: 500;
                }

                .conectando {
                    font-size: calc(90px * var(--sizeLetter));
                    font-weight: 300;
                    letter-spacing: calc(6.5px * var(--sizeLetter));
                    display: grid;
                    align-items: flex-end;
                }

                .sonrisas {
                    font-size: calc(130px * var(--sizeLetter));
                    font-weight: 700;
                    margin-top: calc(-50px * var(--sizeLetter));
                }

                @media screen and (max-width: 1300px) {
                    .color {
                        width: 95%;
                    }

                    .img {
                        margin-left: 60px;
                    }

                    :global(:root) {
                        --sizeLetter: 0.8;
                    }
                }

                @media screen and (max-width: 1040px) {
                    .color {
                    }

                    .img {
                        margin-left: 0px;
                        background-image: url("/img/doctor.png");
                        background-size: auto 100%;
                    }

                    :global(:root) {
                        --sizeLetter: 0.7;
                    }
                }

                @media screen and (max-width: 915px) {
                    .img {
                        margin-left: -100px;
                    }

                    :global(:root) {
                        --sizeLetter: 0.5;
                    }
                }

                @media screen and (max-width: 690px) {
                    .img {
                        margin-left: -20px;
                        background-image: url("/img/doctor3.png");
                        width: 330px;
                    }

                    :global(:root) {
                        --sizeLetter: 0.4;
                    }
                }

                @media screen and (max-width: 500px) {
                    .img {
                        margin-left: -60px;
                    }

                    h1,
                    h2 {
                        margin-right: 20px;
                    }
                }

                @media screen and (max-width: 415px) {
                    h1,
                    h2 {
                        margin-right: 10px;
                    }

                    :global(:root) {
                        --sizeLetter: 0.3;
                    }
                }

                @media screen and (max-width: 340px) {
                    h1,
                    h2 {
                        margin-right: 5px;
                    }

                    :global(:root) {
                        --sizeLetter: 0.28;
                    }
                }
            `}</style>
        </div>
    );
}

export default Portada
