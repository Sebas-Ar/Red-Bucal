import React from 'react'
import Porcentajes from './Porcentajes'

const DescuentosBox = () => {
    return (
        <div className="content">
            <div className="linea1">
                <div className="punto1"></div>
            </div>
            <div className="linea2">
            </div>
            <div className="linea3">
                <div className="punto4"></div>
                <div className="punto2"></div>
            </div>
            <div className="linea4">
                <div className="punto5"></div>
                <div className="punto3"></div>
            </div>
            <section className="cincuenta">
                <Porcentajes 
                    backgroundColor="#ffffffbb" 
                    numero="50" 
                    color="#444444" 
                    sizeNum="220px"
                    arriba="-30px"
                    derecha="40px"
                    sizeText="35px"
                />
            </section>
            <section className="cuarenta">
                <Porcentajes 
                    backgroundColor="#1188cc99" 
                    numero="40" 
                    color="white" 
                    sizeNum="160px"
                    arriba="-25px"
                    derecha="20px"
                    sizeText="25px"
                />
            </section>
            <section className="treinta">
                <Porcentajes 
                    backgroundColor="#bb444499" 
                    numero="30" 
                    color="white" 
                    sizeNum="130px"
                    arriba="-20px"
                    derecha="15px"
                    sizeText="20px"
                />
            </section>
            <section className="veinte">
                <Porcentajes 
                    backgroundColor="#ffaa1188" 
                    numero="20" 
                    color="white" 
                    grados="-90deg"
                    sizeNum="80px"
                    arriba="-10px"
                    derecha="15px"
                    sizeText="15px"
                />
                    
            </section>
            <style jsx>{`
                
                .content {
                    height: 100vh;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 2fr 2px 1.2fr 3px .8fr;
                    grid-template-rows: 4px 1fr 5px 1fr;
                    margin-top: 150px;
                }

                .punto1 {
                    height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    background-color: var(--mainColor);
                    transform: translate(-45%, -45%);
                }

                .punto2 {
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background-color: var(--mainColor);
                    align-self: flex-end;
                    transform: translate(-40%, 50%);
                }

                .punto3 {
                    height: 36px;
                    width: 18px;
                    position: absolute;
                    border-top-left-radius: 100% 50%;
                    border-bottom-left-radius: 100% 50%;
                    background-color: var(--mainColor);
                    justify-self: flex-end;
                    transform: translate(0%, -40%);
                }

                .punto4 {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background-color: var(--mainColor);
                    transform: translate(-40%, -40%);
                }

                .punto5 {
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background-color: var(--mainColor);
                    transform: translate(-45%, -45%);
                }

                .linea1 {
                    background: var(--mainColor);
                    grid-column: 2/3;
                    grid-row: 1/5;
                    displya: grid;
                }

                .linea2 {
                    background: var(--mainColor);
                    grid-column: 1/6;
                    grid-row: 1/2;
                }

                .linea3 {
                    display: grid;
                    background: var(--mainColor);
                    grid-column: 4/5;
                    grid-row: 3/5;
                }

                .linea4 {
                    position: relative;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    background: var(--mainColor);
                    grid-column: 2/6;
                    grid-row: 3/4;
                }

                .cincuenta {
                    grid-row: 2/5;
                    grid-column: 1/2;
                    background-image: url("/img/descuentos50.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                .cuarenta {
                    grid-row: 2/3;
                    grid-column: 3/6;
                    background-image: url("/img/descuentos40.jpg");
                    background-size: 100% auto;
                }

                .treinta {
                    background-color: #ff221199;
                    background-image: url("/img/descuentos30.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }

                .veinte {
                    background-color: #ff9900cc;
                    background-image: url("/img/descuentos20.jpg");
                    background-size: auto 100%;
                    background-position: center;
                }
                 
            `}</style>
        </div>
    )
}

export default DescuentosBox
