import React from 'react'

const RecordUser = () => {
    return (
        <section>
            <label>
                DESCARGAR HISTORIAL: <br/> <br/>
                <a download="Historial.xlsx" href="/">
                    <svg viewBox="0 0 640 512">
                        <path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z" />
                    </svg>
                </a>
            </label>

            <style jsx>{`
                
            section {
                align-self: center;
                display: grid;
                grid-template-columns: 1fr 1fr;
                margin: 0 50px;
            }    

            label {
                margin: 20px 0;
                color: var(--mainColor);
                font-weight: 600;
            }

            svg {
                height: 30px;
            }

            a {
                height: 50px;
                width: 50%;
                text-decoration: none;
                color: var(--colorSelect);
                background: var(--mainColor);
                align-self: center;
                border: none;
                border-radius: 4px;
                outline: none;
                transition: background .3s;
                cursor: pointer;
                display: grid;
                align-items: center;
                justify-items: center;
            }

            a:hover {
                background: var(--colorSelect);
                color: var(--botonesText);
            }
                
            `}</style>
        </section>
    )
}

export default RecordUser
