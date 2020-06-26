import React, { useState } from 'react'
import axios from 'axios'

const PagoVirtual = (props) => {

    const [data, setData] = useState({});

    const onChange = (e) => {
        setData(Object.assign({}, data, {[e.target.name]: e.target.value}))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const url = "https://sandbox.paguelofacil.com/rest/ccprocessing";

        try {
            const result = await axios.post(url, { 
                form : {
                    CCLW: 'D17B05A095489D1176560B4666A283454185F353F401D0201CC5C16F92535DF6B1DEBA18E79442CC0D6F75FD024207680AFBDFD6CF015478BF30CBEF9160A08D',
                    txType: 'SALE',
                    CMTN: '10',
                    CDSC: 'Test del formulario de pago',
                    CCNum: '4059310181757001',
                    ExpMonth: '12',
                    ExpYear: '2020',
                    CVV2: '678',
                    Name: 'Pedro',
                    LastName: 'Perez',
                    Email: 'sebas_ariasd@hotmail.com',
                    Address: 'panama',
                    Tel: '2323232323',
                    Ip: '192.168.0.1',
                    SecretHash: '0337f80c8a19dee560a5d3dc291c472c4e9be3e35becbff2847537c9f5e44989'
                }}
            );

            alert(JSON.stringify(result.data))

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="content">
            <form onSubmit={onSubmit}>

                <svg onClick={() => { props.changeVirtual() }} viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
                </svg>

                <h3>PAGO VIRTUAL</h3>

                    <label>
                        CCNum: <br />
                        <input type="text" name="CCNum" onChange={onChange}/>
                    </label>
                    <label>
                        ExpMonth: <br />
                        <input type="text" name="ExpMonth" onChange={onChange}/>
                    </label>
                    <label>
                        ExpYear: <br />
                        <input type="text" name="ExpYear" onChange={onChange}/>
                    </label>
                    <label>
                        CVV2: <br />
                        <input type="text" name="CVV2" onChange={onChange}/>
                    </label>
                    <label>
                        Name: <br />
                        <input type="text" name="Name" onChange={onChange}/>
                    </label>
                    <label>
                        LastName: <br />
                        <input type="text" name="LastName" onChange={onChange}/>
                    </label>
                    <label>
                        Email: <br />
                        <input type="text" name="Email" onChange={onChange}/>
                    </label>
                    <label>
                        Address: <br />
                        <input type="text" name="Address" onChange={onChange}/>
                    </label>
                    <label>
                        Tel: <br />
                        <input type="text" name="Tel" onChange={onChange}/>
                    </label>

                    <button type="submit">Pagar</button>


            </form>

            <style jsx>{`
                
                .content {
                    z-index: 1000;
                    background: #33333366;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    width: 100%;
                    height: 100vh;
                }

                section {
                    display: grid;
                    grid-template-rows: 30px 1fr 1fr;
                }

                svg {
                    width: 30px;
                    color: var(--puntoRojo);
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    cursor: pointer;
                    transition: transform .5s;
                }

                svg:hover {
                    transform: scale(1.1);
                }

                h3 {
                    margin: 10px 0;
                    text-align: center;
                    font-weight: 400;
                    grid-column: 1/3;
                }
                
                form {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    position: relative;
                    background: white;
                    border-radius: 30px;
                    padding: 30px;
                }

                label {
                    margin: 10px 10px;
                    color: var(--mainColor);
                    font-weight: 600;
                }

                input {
                    displya: inline-block;
                    outline: none;
                }

                input {
                    border: 1px solid #33333322;
                    border-radius: 4px;
                    padding: 5px;
                }

                input::placeholder {
                    color: var(--mainColorClaro);
                }

                button {
                    grid-column: 1/3;
                    align-self: center;
                    justify-self: center;
                    margin-top: 10px;
                    border: none;
                    background: var(--mainColor);
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                }
            
            `}</style>
        </div>
    )
}

export default PagoVirtual
