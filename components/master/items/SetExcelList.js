import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import axios from "axios";
import readXlsxFile from 'read-excel-file'

const SetExcelList = (props) => {


    const [data, setData] = useState({})

    useEffect(() => {
        let dat = {}
        dat = Object.assign({}, dat, { RUC: props.data.RUC })
        dat = Object.assign({}, dat, { identifications: props.data.identifications })
        setData(dat)
    }, [])

    const readExcel = async (e) => {
        try {
            const xmls = await readXlsxFile(e.target.files[0])
            setData(Object.assign({}, data, { excel: xmls }));
        } catch (error) {
            console.log(error);
            alert('archivo equivocado, por favor suba el archvo Excel')
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const url = '/api/setEmployeeList'
        const result = await axios.post(url, data)
        if (result.data.status) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Información actualizada',
                showConfirmButton: false,
                timer: 1000
            })
            props.changeData(result.data.data.value)
        }
    }

    return (
        <form className="content" onSubmit={onSubmit}>
            <div className="upload">
                <label className="label">{data.excel ? 'PLANTILLA CARGADA' : 'SUBIR PLANTILLA DE REGISTRO PARA EMPLEADOS'}
                    <input className="uploadInput" type="file" onChange={(e) => { readExcel(e) }} />
                </label>
            </div>
            <button>Actualizar</button>
            <style jsx>{`

                form {
                    align-self: center;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }

                .upload {
                    background-color: var(--puntoRojo);
                    cursor: pointer;
                    position: relative;
                    padding: 10px;
                }

                .colorAzul {
                    background-color: var(--puntoAzul);
                }

                label {
                    position: relative;
                    font-size: 12px;
                    margin: 10px;
                    text-align: center;
                    color: white;
                    cursor: pointer;
                }

                .uploadInput {
                    position: absolute;
                    top:0;
                    height: 0px;
                    width: 0px; 
                    opacity: 0;
                }
                
                button {
                    margin: 10px;
                    border: none;
                    outline: none; 
                    background-color: var(--mainColor);
                    padding: 10px;
                    cursor: pointer;
                    color: white;
                    border-radius: 4px;
                    margin-right: 10px;
                    width: 100px;
                }
                
            `}</style>
        </form>
    )
}

export default SetExcelList
