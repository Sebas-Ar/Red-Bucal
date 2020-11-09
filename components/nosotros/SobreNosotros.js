import React from 'react'

const SobreNosotros = () => {
    return (
        <div className="content">
            <div className="puntos"></div>
            <div className="text">
                <h1 className="main-title">
                    <span className="sobre">SOBRE</span>
                    <span className="nosotros">NOSOTROS</span>
                </h1>
                <br/>
                <br/>
                <p>Red Bucal se cimenta sobre la visión de organizar una estructura de clínicas dentales para que las mismas puedan generar el paquete de beneficios en servicios odontológicos más competitivo del país. Capilaridad, flexibilidad, conectividad y economía, son algunas de las características que representan con mayor proximidad las actividades que lleva a cabo Red Bucal para llevar sonrisas al alcance de todos. </p>
                <br/>
                <p>Además, no solamente contamos con una red robusta de clínicas que brindan estos beneficios, sino, los mismos pueden ser adquiridos tanto por individuos, como empresas, valor competitivo que nos diferencia del mercado. 
Nuestra red es una red amigable, respetable y confiable, lo que nos permite ser buen aliado de su salud bucal y acompañarlos en todo momento. 
</p>
            </div>
            <div className="imagenes">
                <h1 className="second-title">
                    <span className="nosotros">SOBRE</span>
                    <br/>
                    <span className="nosotros">NOSOTROS</span>
                </h1>
                <div className="color"></div>
                <div className="img"></div>
            </div>


            <style jsx>{`
                
                .content {
                    box-sizing: border-box;
                    height: calc(100vh - 60px);
                    min-height: 720px;
                    padding-top: 150px;
                    display: grid;
                    grid-template-columns: 1fr 4fr 4fr;
                }

                .puntos {
                    margin-top: 60px;
                    margin-right: 60px;
                    height: 200px;
                    background-image: url("/img/puntos.png");
                    background-size: auto 100%;
                    background-position: right;
                }

                .imagenes {
                    display: grid;
                    grid-template-columns: 1fr 12fr;
                    grid-template-rows: 1.2fr 7fr 1fr;
                }

                .color {
                    grid-column: 1/3;
                    grid-row: 2/3;
                    background: var(--secondColor);
                }

                .second-title {
                    display: none;
                }

                .img {
                    grid-column: 2/3;
                    grid-row: 1/4;
                    
                    background-image: url("/img/dentist-1.png");
                    background-position: center;
                    background-size: auto 100%;
                }

                .text {
                    margin: 40px 40px 80px 40px;
                    color: var(--mainColor);
                    display: grid;
                }

                h1 {
                    display: grid;
                    font-size: 60px;
                }

                .sobre {
                    font-weight: 400;
                }

                .nosotros {
                    margin-top: -30px;
                    font-weight: 700;
                    font-size: 80px
                }

                p {
                    text-align: justify;
                    font-weight: 500;
                    font-size: .9rem;
                    color: var(--mainColorClaro);
                }

                @media screen and (max-width: 1340px) {
                    .content {
                        grid-template-columns: 1fr 4fr 3fr;
                    }

                    .imagenes {
                        grid-template-columns: 1fr 12fr;
                        grid-template-rows: 2.2fr 7fr 2fr;
                    }

                    .img {
                        grid-row: 2/3;
                    }

                    .color {
                        height: 80%;
                        align-self: center;
                    }
                }

                @media screen and (max-width: 1000px) {
                    .content {
                        padding-top: 100px;
                        grid-template-columns: 4fr 4fr;
                    }

                    .puntos {
                        display: none;
                    }
                }

                @media screen and (max-width: 850px) {
                    .content {
                        grid-template-columns: 1fr;
                        height: auto;
                    }

                    .color {
                        display: none;
                    }

                    .imagenes {
                        grid-row: 1/2;
                        width: 100%;
                        height: 560px;
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr;
                        position: relative;
                    }

                    .img {
                        grid-column: 1/2;
                        grid-row: 1/2;
                    }
                    
                    .main-title {
                        display: none;
                    }

                    .second-title {
                        display: block;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        text-align: center;
                        color: white;
                        background-color: #091C4799;
                        width: 100%;
                    }

                }

                @media screen and (max-width: 450px) {
                    .nosotros {
                        font-size: 50px;
                    }

                    .img {
                        background-position: center right;
                    }
                }

            `}</style>
        </div>
    )
}

export default SobreNosotros
