import React from 'react'
import { useRouter } from 'next/router'

const Planes = (props) => {

    const router = useRouter()

    const contacto = () => {
        router.replace("/contacto")
    }

    const registro = () => {
        router.replace("/registro-ingreso")
    }

    return (
        <div className="content">

            <h3>{ props.title }</h3>
            <div className="img"></div>
            <div className="text">
                <h4>{ props.tit1 }</h4>
                <p>{ props.text1 }</p>
                <h4>{ props.tit2 }</h4>
                <p>{ props.text2 }</p>
                <button onClick={contacto} className="contacto">Contacto</button>
                <button onClick={registro} className="registro">Registro</button>
            </div>

            <style jsx>{`
                
                .content {
                    grid-row: 2/3;
                    justify-self: center;
                    grid-column: ${ props.position };
                    display: grid;
                    grid-template-columns: 50px 450px 50px;
                    grid-template-rows: 35px 35px 300px 650px;
                    justify-items: center;
                }

                h3 {
                    width: 100%;
                    grid-column: 2/3;
                    grid-row: 1/3;
                    color: var(--mainColor);
                    background: var(--amarillo);
                    text-align: center;
                    z-index: 10;
                    display: grid;
                    align-items: center;
                    font-size: 35px;
                    font-weight: 400;
                }

                .img {
                    width: 100%;
                    grid-column: 1/4;
                    grid-row: 2/4;
                    background-image: url(${ props.img });
                    background-size: 100% 100%;
                    box-shadow: 5px 5px 10px 0px #333333aa;
                    z-index: 5;
                }

                .text {
                    grid-column: 2/3;
                    grid-row: 4/5;
                    width: 100%;
                    height: 100%;
                    background: var(--amarillo);
                    border-radius: 0 0 50px 50px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: .5fr .7fr .5fr 1fr 1fr;
                }

                h4 {
                    position: relative;
                    grid-column: 1/3;
                    margin: 20px 40px;
                    color: var(--mainColor);
                }

                h4:before {
                    position: absolute;
                    content: "";
                    width: 10px;
                    height: 10px;
                    background: white;
                    left: -20px;
                    top: 5px;
                    border-radius: 50%;
                }

                p {
                    grid-column: 1/3;
                    text-align: justify;
                    margin: 0 40px;
                    color: var(--mainColorClaro);
                }

                button {
                    width: 120px;
                    height: 30px;
                    justify-self: center;
                    align-self: center;
                    border: none;
                    border-radius: 40px;
                    color: white;
                    transition: background .3s;
                    cursor: pointer;
                    outline: none;
                }

                .contacto {
                    background: var(--puntoAzul);
                }

                .registro {
                    background: var(--puntoRojo);
                }

                .contacto:hover {
                    background: var(--botonesHover);
                }

                .registro:hover {
                     background: var(--botonesRegistro);
                }

            `}</style>
        </div>
    )
}

export default Planes
