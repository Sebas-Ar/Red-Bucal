import React from 'react'

const Cobertura = () => {
    return (
        <div className="content">
            <h2>NUESTRA COBERTURA</h2>
            <div className="linea"></div>
            <p>Cubrimos consulta dental con diagnóstico, planes de tratamiento, profilaxis dental, topificación de Flúor, sellantes de sosas y fisuras, radiografías, colocación de resina simple o compuesta en dientes anteriores y posteriores, extracción simple, endodoncias monorradiculares, birradiculares, multirradiculares, pulpotomías y pulpectomía, cementado provisional de prótesis fija, y otros beneficios de descuentos en tratamientos dentales que van desde el 20% hasta el 60%.</p>
            <style jsx>{`
                
                .content {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    align-items: center;
                    justify-items: center;
                    width: 100%;
                }    

                .linea {
                    position: relative;
                    grid-column: 2/4;
                    grid-row: 1/2;
                    background: #33333399;
                    height: 2px;
                    width: 100%;
                    align-self: center;
                }

                .linea:before {
                    content: "";
                    position: absolute;
                    transform: translate(-50%, -45%);
                    width: 20px;
                    height: 20px;
                    background: var(--puntoAzul);
                    border-radius: 50%;
                }
                .linea:after {
                    content: "";
                    position: absolute;
                    transform: translate(50%, -45%);
                    right: 0;
                    width: 20px;
                    height: 20px;
                    background: var(--puntoRojo);
                    border-radius: 50%;
                }

                h2 {
                    z-index: 10;
                    grid-row: 1/2;
                    grid-column: 2/4;
                    font-size: 35px;
                    font-weight: 400;
                    color: var(--mainColor);
                    margin: 10px 0;
                    background: var(--amarillo);
                    padding: 10px 30px;
                    border-radius: 30px;
                }

                p {
                    margin-top: 20px;
                    text-align: justify;
                    grid-row: 2/3;
                    grid-column: 2/4;
                    line-height: 25px;
                    color: var(--mainColor);
                }
                
            `}</style>
        </div>
    )
}

export default Cobertura
