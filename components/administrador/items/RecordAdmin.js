import React, { useState, useEffect } from 'react'
import moment from "moment";
import axios from "axios";

const RecordAdmin = (props) => {

    const [data, setData] = useState({});

    useEffect(() => {
        let time = {}
        time.fecha = moment().locale("es").format('LL')
        time.hora = moment().locale("es").format('LT')
        time.historial = props.data.historial
        time.identification = props.data.identification
        setData(time)
    }, [])

    const onchange = (e) => {
        setData(Object.assign({}, data, { [e.target.name]: e.target.value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const url = '/api/addHistorial'
        try {

            const result = await axios.put(url, data)
            props.changeData(result.data.data);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <section>
            <div className="table">
                <p>FECHA</p>
                <p>HORA</p>
                <p>TRATAMIENTO</p>
                <div className="linea"></div>
                {
                    props.data.historial.map(historial => (
                        <div className="form">
                            <p>{historial.fecha}</p>
                            <p>{historial.hora}</p>
                            <p>{historial.tratamiento}</p>
                        </div>
                    ))

                }
                <form onSubmit={onSubmit}>
                    <input type="text" name="fecha" onChange={onchange} value={data.fecha} />
                    <input type="text" name="hora" onChange={onchange} value={data.hora} />
                    <select name="tratamiento" onChange={onchange}>
                        <option value="">--------</option>
                        <option value="1">Lorem, ipsum dolor 1%</option>
                        <option value="2">Lorem, ipsum dolor 1%</option>
                        <option value="3">Lorem, ipsum dolor 1%</option>
                        <option value="4">Lorem, ipsum dolor 1%</option>
                    </select>
                    <button>Agregar</button>
                </form>
            </div>

            <style jsx>{`
                
                section {
                    align-self: center;
                    display: grid;
                    justify-items: center;
                }   

                .table {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                form, .form {
                    grid-column: 1/4;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                p {
                    text-align: center;
                    color: var(--mainColor);
                    font-size: 16px;
                    font-weight: 600;
                    margin: 10px;
                }

                input, select {
                    margin: 10px;
                    padding: 5px;
                    border: 1px solid #33333322;
                    border-radius: 4px;
                    outline: none;
                }

                .linea {
                    grid-column: 1/4;
                    background: var(--mainColorClaro);
                    height: 2px;
                    width: 100%;
                }

                button {
                    grid-column: 1/4;
                    justify-self: center;
                    align-self: center;
                    border: none;
                    background: var(--mainColor);
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    outline: none;
                }
                
            `}</style>
        </section>
    )
}

export default RecordAdmin
