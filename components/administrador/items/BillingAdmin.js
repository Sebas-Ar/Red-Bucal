import React, { useState, useEffect } from 'react'

const BillingAdmin = () => {

    const [check, setCheck] = useState(false);

    const onClick = e => {
        setCheck(e.target.checked)
    }

    useEffect(() => {
        console.log(check);
    }, [check]);

    return (
        <section>
            <div>
                <h3>PAGO FÍSICO</h3>
                <br/>
                <label className="label">
                    ESTADO:
                    <p>Activo / Inactivo</p>
                </label>
                <br/>
                <label className="checkbox" >
                    <input type="checkbox" name="Vehiculo" onClick={onClick} />
                    <i></i>
                </label>
                <br/>
                <button>Actualizar</button>
                <span> - Cambiar a <strong>{check ? 'Activo' : 'Inactivo'}</strong></span>

            </div>

            <style jsx>{`
                
                section {
                    margin: 0 50px;
                    align-self: center;
                }

                h3 {
                    color: var(--mainColor);
                    font-weight: 600;
                    text-align: center;
                }

                .label {
                    color: var(--mainColor);
                    font-weight: 500;
                }

                p {
                    color: var(--mainColorClaro);
                }

                span {
                    color: var(--mainColorClaro);
                    font-weight: 400;
                }
                input{
                    appearance: none;
                    visibility: hidden;
                    position: absolute;
                    right: 0;
                }
                
                .checkbox{
                    position: relative;
                    margin-bottom: 10px;
                    padding:5px 0 5px 60px;
                    display: block;
                    cursor: pointer;
                }
                
                i{
                    background: #f0f0f0;
                    border:2px solid rgba(0,0,0,0.2);
                    position: absolute; 
                    left: 0;
                    top: 0;
                    width: 48px;
                    height: 27px;
                    border-radius: 15px;
                }

                i:before{
                    content: '';
                    width: 26px;
                    height: 26px;
                    background: #fff;
                    border-radius: 50%;
                    position: absolute;
                    z-index: 1;
                    left: 0px;
                    top: 0px;
                    box-shadow: 3px 0 3px 0 rgba(0,0,0,0.2);
                }

                input:checked + i:before{
                    left: 22px;
                    box-shadow: 3px 0 -3px 0 rgba(0,0,0,0.2);
                }
                
                input:checked + i{
                    background: #F1CD5F;
                }

                i:after{
                    content: 'ON';
                    position: absolute;
                    font-size: 10px;
                    color: rgba(255,255,255,0.6);
                    top: 8px;
                    left: 4px;
                    opacity: 0;
                    transition: opacity 0.25s;
                }
                
                input:checked + i:after{
                    opacity: 1;
                }

                button {
                    margin-top: 10px;
                    border: none;
                    background: var(--mainColor);
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    outline: none;
                    cursor: pointer;
                }
            `}</style>
        </section>
    )
}

export default BillingAdmin
