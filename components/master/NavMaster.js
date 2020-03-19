import React from 'react'
import { useRouter } from 'next/router'

const NavMaster = (props) => {

    const router = useRouter()

    const selection = (selector) => {
        return {
            fontWeight: selector === props.select ? '800' : '',
            margin: selector === props.select ? '-2px 0 -3px 0' : ''
        }
    }

    const logout = () => {
        sessionStorage.removeItem('tokenMaster')
        router.replace("/")
    }

    return (
        <div className="content">

            <div className="diente1"></div>
            <nav>
                {
                    props.user === 0
                        ?
                        <ul>
                            <li>
                                <h2>{props.adminData.name}</h2>
                            </li>
                            <li>
                                <button onClick={() => { props.onClick(0) }} style={selection(0)}>BUSCAR USUARIO / EMPRESA</button>
                            </li>
                            <li>
                                <button onClick={() => { router.push("/registro-administrador") }} style={selection(5)}>REGISTRAR ADMINISTRADOR</button>
                            </li>
                            <li>
                                <button onClick={logout}>SALIR</button>
                            </li>
                        </ul>
                        : props.user === 1 ?
                            <ul>
                                <li>
                                    <h2>{props.adminData.name}</h2>
                                </li>
                                <li>
                                    <button onClick={() => { props.onClick(0) }} style={selection(0)}>BUSCAR USUARIO / EMPRESA</button>
                                </li>
                                <li>
                                    <button onClick={() => { props.onClick(1) }} style={selection(1)}>INFORMACIÓN DEL USUARIO</button>
                                </li>
                                <li>
                                    <button onClick={() => { props.onClick(2) }} style={selection(2)}>FACTURACIÓN</button>
                                </li>
                                <li>
                                    <button onClick={() => { props.onClick(3) }} style={selection(3)}>SERVICIOS</button>
                                </li>
                                <li>
                                    <button onClick={() => { props.onClick(4) }} style={selection(4)}>HISTORIAL</button>
                                </li>
                                <li>
                                    <button onClick={() => { router.push("/registro-administrador") }} style={selection(5)}>REGISTRAR ADMINISTRADOR</button>
                                </li>
                                <li>
                                    <button onClick={logout}>SALIR</button>
                                </li>
                            </ul>
                            :
                            <ul>
                                <li>
                                    <h2>{props.adminData.name}</h2>
                                </li>
                                <li>
                                    <button onClick={() => { props.onClick(0) }} style={selection(0)}>BUSCAR USUARIO / EMPRESA</button>
                                </li>
                                <li>
                                    <button onClick={() => { props.onClick(1) }} style={selection(1)}>INFORMACIÓN EMPRESARIAL</button>
                                </li>
                                <li>
                                    <button onClick={() => { props.onClick(2) }} style={selection(2)}>FACTURACIÓN</button>
                                </li>
                                <li>
                                    <button onClick={() => { router.push("/registro-administrador") }} style={selection(5)}>REGISTRAR ADMINISTRADOR</button>
                                </li>
                                {/* 
                            <li>
                                <button onClick={() => { props.onClick(3) }} style={selection(3)}>SERVICIOS</button>
                            </li>
                            <li>
                                <button onClick={() => { props.onClick(4) }} style={selection(4)}>HISTORIAL</button>
                            </li> */}
                                <li>
                                    <button onClick={logout}>SALIR</button>
                                </li>
                            </ul>
                }

            </nav>

            <div className="linea"></div>

            {props.children}

            <div className="diente2"></div>

            <style jsx>{`
                
                .content {
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    grid-template-columns: 1fr 6fr 2px 9.5fr 1fr;
                }    

                .diente1 {
                    background-image: url("/img/medio-diente4.png");
                    background-position: center right;
                    background-size: 130% auto;
                    background-repeat: no-repeat;
                    margin-right: 20px;
                }

                .diente2 {
                    background-image: url("/img/medio-diente3.png");
                    background-position: center;
                    background-size: 100% auto;
                    background-repeat: no-repeat;
                }

                .linea {
                    height: 40%;
                    align-self: center;
                    background-color: var(--mainColorClaro);
                }

                nav {
                    align-self: center;
                    margin: 0 50px;
                }

                li {
                    list-style: none;
                    margin: 10px 0;
                }

                button, h2 {
                    text-align: left;
                    border: none;
                    background-color: white;
                    color: var(--mainColor);
                    font-size: 18px;
                    padding: 10px 20px;
                    transition: background-color .3s;
                    outline: none;
                    cursor: pointer;
                }

                button:hover {
                    font-weight: 800;
                    margin: -2px 0 -3px 0;
                }

                h2 {
                    background-color: var(--colorSelect);
                    font-weight: 800;
                    margin: -2px 0 -3px 0;
                    cursor: auto;
                }
                
                
            `}</style>

        </div>
    )
}
export default NavMaster
