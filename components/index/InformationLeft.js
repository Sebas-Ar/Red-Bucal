import React from 'react'

const InformationLeft = () => {
    return (
        <section className="content">
            <div className="info">
                <div className="puntos"></div>
                <div className="text">
                    <h3>
                        <span className="sonrisas">SONRISAS AL ALCANCE</span>
                        <span className="todos">DE TODOS</span>
                    </h3>
                    <p>Contamos con un plan dental a la medida de cada persona y de cada empresa, que además de procurar la salud oral de sus empleados y sus familias, generan en ellos vínculos de lealtad que se traducen en su desempeño.  A un bajo costo lo que les permite tener importantes ahorros y la excelencia de la atención de odontólogos generales y especialistas capacitados.</p>
                </div>
                <div className="dientes"></div>
            </div>
            <div className="img"></div>

            <style jsx>{`

                :global(:root) {
                    --sizeInfo1 : 1;
                }
                
                .content {
                    height: 500px;
                    display: grid;
                    grid-template-columns: 2.1fr 2fr;
                }

                .img {
                    background-image: url("/img/odontologo-cliente.png");
                    background-size: auto 100%;
                    background-position: right;
                }

                .puntos {
                    background-image: url("/img/puntos6x3.png");
                    background-size: auto 80%;
                    background-repeat: no-repeat;
                    grid-column: 1/3;
                    grid-row: 1/2;
                }

                .dientes {
                    background-image: url("/img/medio-diente.png");
                    background-size: 100% auto;
                    background-position: center;
                    background-repeat: no-repeat;
                    grid-column: 2/3;
                    grid-row: 1/3;
                }

                .info {
                    display: grid;
                    grid-template-columns: 4fr 1fr;
                    grid-template-rows: 1fr 4fr;
                }

                h3 {
                    margin-top: 30px;
                    color: var(--mainColor);
                    display: grid;
                    justify-items: center;
                }

                .sonrisas {
                    font-size: calc(30px * var(--sizeInfo1));
                    font-weight: 400;
                    letter-spacing: calc(6px * var(--sizeInfo1));
                }

                .todos {
                    font-size: calc(90px * var(--sizeInfo1));
                    margin-top: calc(-30px * var(--sizeInfo1));
                }

                p {
                    color: var(--mainColorClaro);
                    margin: 70px 40px 30px 60px;
                    text-align: justify;
                }

                @media screen and (max-width: 1090px) {
                    
                    :global(:root) {
                        --sizeInfo1 : .78;
                    }

                }

                @media screen and (max-width: 850px) {

                    .content {
                        display: none;
                    }

                }
                
                
            `}</style>
        </section>
    )
}

export default InformationLeft
