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
                tit1="Plan red bucal para personas"
                tit2="Nuestra Cobertura"
                text1="Colocamos a su disposición un producto sencillo y al alcance de todos, ofreciéndoles servicios preventivos y correctivos para el cuidado de la salud oral de sus colaboradores. "
                text2="Cubrimos consulta dental con diagnóstico, planes de tratamiento, profilaxis dental, topificación de Flúor, sellantes de sosas y fisuras, radiografías, colocación de resina simple o compuesta en dientes anteriores y posteriores, extracción simple, endodoncias monorradiculares, birradiculares, multirradiculares, pulpotomías y pulpectomía, cementado provisional de prótesis fija, y otros beneficios de descuentos en tratamientos dentales que van desde el 20% hasta el 60%."
            />
            <Planes 
                title="EMPRESAS" 
                img="/img/odontologo-derecha.png" 
                position="3/5"
                tit1="Plan red bucal para empresas" 
                tit2="Nuestra Cobertura" 
                text1="Es un plan más completo diseñado especialmente para resguardar la salud bucal de aquellas personas que quieren darle tratamiento preventivo a su boca."
                text2="Cubrimos consulta dental con diagnóstico, planes de tratamiento, profilaxis dental, topificación de Flúor, sellantes de sosas y fisuras, radiografías, colocación de resina simple o compuesta en dientes anteriores y posteriores, extracción simple, endodoncias monorradiculares, birradiculares, multirradiculares, pulpotomías y pulpectomía, cementado provisional de prótesis fija, y otros beneficios de descuentos en tratamientos dentales que van desde el 20% hasta el 60%."
            />
            
            <style jsx>{`
                
                .content {
                    margin-top: 50px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-template-rows: 50px 1fr;
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

                .linea1 {
                    grid-column: 1/2;
                    justify-self: flex-end;
                }

                .linea2 {
                    grid-column: 4/5;
                }
                
            `}</style>
        </div>
    )
}

export default LayoutPlanes
