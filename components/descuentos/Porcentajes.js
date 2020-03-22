import React from 'react'

const Porcentajes = (props) => {
    return (
        <div className="content">

            <hgroup>
                <h5>{props.numero}%</h5>
                <h6>Lorem ipsum</h6>
            </hgroup>

            <style jsx>{`

                .content {
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    height: 100%;
                    width: 100%;
                    background: ${props.backgroundColor}
                }    

                hgroup {
                    transform: rotate(${props.grados});
                    color: ${props.color};
                }

                h5 {
                    font-size: ${props.sizeNum};
                }

                h6 {
                    text-align: right;
                    margin: ${props.arriba} ${props.derecha} 0 0;
                    font-size: ${props.sizeText};
                    font-weight: 400;
                }
                
            `}</style>

        </div>
    )
}

export default Porcentajes
