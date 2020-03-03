import React, { useState, useEffect } from 'react'

const RecordAdmin = () => {

    const [file, setFile] = useState('algo');
    const [fileName, setFileName] = useState('');
    const [errors, setErrors] = useState({});
    const [bool, setBool] = useState(false);

    useEffect(() => {
        if (!errors.fileError && fileName !== '') {
            setBool(true)
        } else {
            setBool(false)
        }
    });


    const onClick = e => {
        setFile(e.target.value);
    }

    const onChange = e => {
        let text = e.target.value.split('\\').pop();
        let Extencion = text.split('.').pop();
        setFileName(text);
        if (Extencion === 'pdf') {
            setBool(true)
            if (errors.fileError) delete errors.fileError
        } else {
            setErrors( Object.assign({}, errors, { fileError: `El archivo es .${Extencion}, debe ser .xlsx` }) )
        }
        onClick
    }

    const send = () => {
        if (bool) {
            alert('Subiendo Archivo')
            console.log(file)
        }
    }

    return (
        <section>
            <label> Seleccionar
                <input type="file" name="" onChange={onChange}/>
            </label>
            <span>{fileName === '' ? ' Archivo .xlsx (Excel)' : errors.fileError ? errors.fileError : fileName}</span>
            <br/>
            <button onClick={send}>Subir</button>

            <style jsx>{`
                
                button {
                    background-color: ${bool ? 'var(--mainColor)' : 'var(--mainColorClaro)'};
                    cursor: ${bool ? 'pointer' : 'auto'};
                }    
                
                
            `}</style>

            <style jsx>{`
                
                section {
                    margin: 0 50px;
                    align-self: center; 
                }

                input {
                    width: 0.1px;
                    height: 0.1px;
                    opacity: 0;
                    overflow: hidden;
                    z-index: -1;
                }

                label {
                    font-size: 14px;
                    font-weight: 600;
                    color: #fff;
                    background-color: var(--mainColor);
                    display: inline-block;
                    transition: all .5s;
                    cursor: pointer;
                    padding: 15px 40px !important;
                    text-transform: uppercase;
                    width: fit-content;
                    text-align: center;
                }

                button {
                    margin-top: 10px;
                    border: none;
                    width: 100px;
                    height: 30px;
                    color: white;
                    border-radius: 5px;
                    outline: none;
                }
                
            `}</style>
        </section>
    )
}

export default RecordAdmin
