import React from 'react'

const Feature = (props) => {
    return (
        <section className="content">

            <img src={props.img} alt=""/>
            <h2>{props.titulo}</h2>
            <p>{props.parrafo}</p>

            <style jsx>{`
                
                .content {
                    display: grid;
                    grid-template-rows: 2fr 1fr 2fr;
                    justify-items: center;
                    align-items: center;
                }

                h2 {
                    padding:5px 0;
                    width: 100%;
                    text-align: center;
                    background-color: var(--amarillo);
                    color: var(--mainColor);
                }

                p {
                    color: white;
                    font-size: 12px;
                    margin: 0 40px 20px;
                }

                img {
                    height: 65px;
                }
                
            `}</style>
        </section>
    )
}

export default Feature
