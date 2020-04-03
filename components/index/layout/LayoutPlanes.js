import React from 'react'
import Planes from '../Planes'

const LayoutPlanes = () => {
    return (
        <div className="content">
            <div className="linea1"></div>
            <div className="linea2"></div>
            <div className="linea"></div>
            <Planes 
                title="PERSONAS" 
                img="/img/odontologo-izquierda.png" 
                position="1/3" 
                valor="12"
                fecha="AÑO"
                colaborador="UN SOLO PAGO ANUAL*"
                tit1="Plan red bucal para personas"
                text1="Colocamos a su disposición un producto sencillo y al alcance de todos, ofreciéndoles servicios preventivos y correctivos para el cuidado de la salud oral de sus colaboradores. "
            />
            <Planes 
                title="EMPRESAS" 
                img="/img/odontologo-derecha.png" 
                position="3/5"
                valor="1"
                fecha="MES"
                colaborador="POR COLABORDOR*"
                tit1="Plan red bucal para empresas"  
                text1="Es un plan más completo diseñado especialmente para resguardar la salud bucal de aquellas personas que quieren darle tratamiento preventivo a su boca."
            />
            <div className="linea3"></div>
            <div className="linea4"></div>
            
            <style jsx>{`
                
                .content {
                    margin-top: 50px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-template-rows: 50px 1fr 100px;
                    background-image: url("/img/puntos.png");
                    background-repeat: no-repeat;
                    background-position: right center;
                    background-size: auto 28%;
                }    

                .linea {
                    position: relative;
                    grid-column: 2/4;
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
                    background: var(--puntoRojo);
                    border-radius: 50%;
                }
                .linea:after {
                    content: "";
                    position: absolute;
                    transform: translate(50%, -45%);
                    right: 0;
                    width: 20px;
                    height: 20px;
                    background: var(--puntoAzul);
                    border-radius: 50%;
                }

                .linea1, .linea2 {
                    grid-row: 1/2;
                    background: #33333399;
                    height: 50%;
                    width: 2px;
                    align-self: flex-end;
                }

                .linea3, .linea4 {
                    grid-row: 3/4;
                    background: #33333399;
                    height: 140%;
                    width: 2px;
                    align-self: flex-start;
                }

                .linea1 {
                    grid-column: 1/2;
                    justify-self: flex-end;
                }

                .linea2 {
                    grid-column: 4/5;
                }

                .linea3 {
                    grid-column: 1/2;
                    justify-self: flex-end;
                }

                .linea4 {
                    grid-column: 4/5;
                }

                @media screen and (max-width: 1150px) {
                    .content {
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr 1fr;
                        background-size: auto 18%;
                    }

                    .linea1, .linea2, .linea3, .linea4, .linea {
                        display: none;
                    }

                    
                }
                @media screen and (max-width: 640px) {

                    .content {
                        margin-top: 0px;
                        
                    }

                }
                
            `}</style>
        </div>
    )
}

export default LayoutPlanes
