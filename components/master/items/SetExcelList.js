import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import readXlsxFile from "read-excel-file";
import ErrorsFileExcel from "./ErrorsFileExcel";

const SetExcelList = (props) => {
    const [data, setData] = useState([]);
    const [showFileError, setshowFileError] = useState(false);
    const [errorsFile, setErrorsFile] = useState([]);

    const readExcel = async (e) => {
        try {
            console.log("cargando archivo");
            const xmls = await readXlsxFile(e.target.files[0]);
            setData(xmls);
        } catch (error) {
            const file = document.getElementById("file");
            file.value = null;
            setData([]);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const url = "/api/setEmployeeList";
        const result = await axios.post(url, { data, RUC: props.data.RUC });
        console.log(result);
        if (result.data.status == "ok") {
            Swal.fire({
                position: "center",
                icon: "success",
                title: result.data.message,
                showConfirmButton: true,
            });
            props.changeData(result.data.data);
        } else {
            setErrorsFile(result.data.message);
            setshowFileError(true);
        }
    };

    return (
        <form className="content" onSubmit={onSubmit}>
            {showFileError ? (
                <ErrorsFileExcel
                    setshowFileError={setshowFileError}
                    errorsFile={errorsFile}
                />
            ) : null}
            <div className="upload">
                <label className="label">
                    {data.excel
                        ? "PLANTILLA CARGADA"
                        : "SUBIR PLANTILLA DE REGISTRO PARA EMPLEADOS"}
                    <input
                        id="file"
                        className="uploadInput"
                        type="file"
                        onChange={(e) => {
                            readExcel(e);
                        }}
                        onClick={(e) => {
                            e.target.value = "";
                            setData([]);
                        }}
                        accept=".xlsx"
                    />
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
                    top: 0;
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
    );
};

export default SetExcelList;
