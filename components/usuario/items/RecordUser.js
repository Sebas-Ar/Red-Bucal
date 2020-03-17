import React from 'react'

const RecordUser = () => {
    return (
        <section>
            <table>
                <p>FECHA</p>
                <p>HORA</p>
                <p>TRATAMIENTO</p>
                <div className="linea"></div>
            </table>

            <style jsx>{`
                
                section {
                    align-self: center;
                    display: grid;
                    justify-items: center;
                }   

                table {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    width: 500px;
                }

                p {
                    text-align: center;
                    color: var(--mainColor);
                    font-size: 16px;
                    font-weight: 600;
                }

                .linea {
                    grid-column: 1/4;
                    background: var(--mainColorClaro);
                    height: 2px;
                    width: 100%;
                }


                
            `}</style>
        </section>
    )
}

export default RecordUser
