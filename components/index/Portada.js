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
            </div>
            <div className="abajo"></div>
            

            <style jsx>{`
                
                .content {
                    background-image: url("/img/doctor-fondo.jpg");
                    background-size: auto 100%; 
                    background-position: center;
                    height: 100vh;
                    width: 100%;
                    display: grid;
                    grid-template-rows: 1fr 1fr 1fr;
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
                    width: 490px;
                }

                .abajo {
                    grid-column: 1/2;
                    grid-row: 3/4;
                }

                .color {
                    background: var(--amarillo);
                    width: 90%;
                    border-radius: 0 30px 30px 0;
                    grid-row: 2/3;
                    grid-column: 1/2;
                    display: grid;
                    justify-items: flex-end;
                }

                h1 {
                    display: grid;
                    color: var(--mainColor);
                    height: 100%;
                    margin-right: 70px;
                }

                .conectando {
                    font-size: 90px;
                    font-weight: 300;
                    letter-spacing: 6.5px;
                }

                .sonrisas {
                    font-size: 130px;
                    font-weight: 700;
                    margin-top: -50px;
                }
                
            `}</style>
        </div>
    )
}

export default Portada
