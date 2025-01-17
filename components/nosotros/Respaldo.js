const Respaldo = () => {
    return (
        <div className="content">
            <h2>RESPALDO</h2>
            <div className="linea"></div>
            <p>En alianza con nuestros clientes hemos logrado generar el valor agregado que nos caracteriza en nuestra visión en donde queremos cuidarte conectando sonrisas con una salud bucal más responsable.</p>

            <div className="imagenes">
                <img src="/img/logo16.png" alt=""/>
                <img src="/img/logo42.png" alt=""/>
                <img src="/img/logo20.png" alt=""/>
                <img src="/img/logo17.png" alt=""/>
                <img src="/img/logo19.png" alt=""/>
                <img src="/img/logo22.png" alt=""/>
                <img src="/img/logo18.png" alt=""/>
                <img src="/img/logo30.png" alt=""/>
                <img src="/img/logo31.png" alt=""/>
                <img src="/img/logo32.png" alt=""/>
                <img src="/img/logo33.png" alt=""/>
                <img src="/img/logo34.png" alt=""/>
                <img src="/img/logo35.png" alt=""/>
                <img src="/img/logo36.png" alt=""/>
                <img src="/img/logo37.png" alt=""/>
                <img src="/img/logo39.png" alt=""/>
                {/* En espera para corregir el tamaño
                <img src="/img/logo38.png" alt=""/>
                <img src="/img/logo40.png" alt=""/>
                <img src="/img/logo41.png" alt=""/>
                <img src="/img/logo43.png" alt=""/>
                <img src="/img/logo44.png" alt=""/>
                <img src="/img/logo45.png" alt=""/>
                <img src="/img/logo46.png" alt=""/>
                <img src="/img/logo47.png" alt=""/>
                <img src="/img/logo48.png" alt=""/>
                <img src="/img/logo49.png" alt=""/>
    */}

            </div>

            <div className="dientes"></div>

            <style jsx>{`

                .content {
                    margin-top: 50px;
                    display: grid;
                    grid-template-rows: auto auto auto;
                    position: relative;
                }

                img {
                    height: 2.5rem;
                    display: flex;
                    justify-content: center;                    
                }

                h2 {
                    grid-row: 1/2;
                    grid-column: 1/2;
                }

                .linea {
                    position: absolute;
                    background: #66666699;
                    height: 2px;
                    width: 350px;
                    justify-self: flex-end;
                    align-self: center;
                    top: 0;
                    right: 0;
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
                    z-index: 1;
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
                    max-width: 700px;
                    color: var(--mainColorClaro);
                    margin: 0 5rem;
                    padding: 1.5em;
                }

                .imagenes {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column: 1/2;
                    grid-row: 3/4;
                    justify-items: center;
                    align-items: center;
                    gap: 2rem;
                    margin-inline: 2rem;
                    margin-bottom: 2rem;
                }

                .dientes {
                    grid-column: 1/2;
                    grid-row:2/3;
                    background-image: url("/img/diente-horizontal.png");
                    background-size: auto 120%;
                    background-position: right;
                    height: 100%;
                    width: 5em;
                }

                @media screen and (width < 800px) {
                    .imagenes {
                        grid-template-columns: 1fr 1fr;
                    }

                    img {
                        height: 3rem;
                    }
                }

                @media screen and (width < 660px) {
                    .imagenes {
                        grid-template-columns: 1fr;
                    }

                    img {
                        height: 3rem;
                    }

                    p {
                        margin: 0 3rem;
                    }
                }

            `}</style>
        </div>
    )
}

export default Respaldo
