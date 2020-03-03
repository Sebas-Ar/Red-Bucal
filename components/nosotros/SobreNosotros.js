import React from 'react'

const SobreNosotros = () => {
    return (
        <div className="content">
            <div className="puntos"></div>
            <div className="text">
                <h1>
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
                <div className="color"></div>
                <div className="img"></div>
            </div>


            <style jsx>{`
                
                .content {
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

                .img {
                    grid-column: 2/3;
                    grid-row: 1/4;
                    background-image: url("/img/dentist-1.png");
                    background-size: auto 100%;
                    background-position: center;
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

            `}</style>
        </div>
    )
}

export default SobreNosotros
