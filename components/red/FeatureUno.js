import React from 'react'

const FeatureUno = (props) => {
    return (
        <section className="content">

            <img className="img" src={props.img} alt="" />
            <h2>{props.titulo}</h2>
            <div className="doble">
                <img className="marker" src="/img/marker.svg" alt=""/>
                <p>{props.location}</p>
                <img className="marker" src="/img/phone.svg" alt=""/>
                <p>{props.phone}</p>
            </div>

            <style jsx>{`
                
                .content {
                    display: grid;
                    grid-template-rows: 2fr 1fr 4fr;
                    justify-items: center;
                    align-items: center;
                }

                .doble {
                    display: grid;
                    grid-template-columns: 50px 1fr;
                    grid-template-rows: 1fr 1fr;
                    align-items: center;
                    justify-items: center;
                }

                .amarilloLine {
                    display: none;
                    background-color: var(--amarillo);
                    width: 100%;
                    height: 100%;
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
                    font-size: 20px;
                    position: relative;
                    margin: 30px;
                }

                .img {
                    height: 65px;
                }

                .marker {
                    height: 35px;
                }

                @media screen and (max-width: 1010px) {
                    .content {
                        grid-template-rows: 2fr 1fr 4fr 3px;
                    }

                    .amarilloLine {
                        display: block;
                    }
                }
                
            `}</style>
        </section>
    )
}

export default FeatureUno
