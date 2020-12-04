import React from 'react'

const FeatureUno = (props) => {
    return (
        <section className="content">

            <div className="amarillo left"></div>

            <img className="img" src={props.img} alt="" />

            <h2>{props.titulo}</h2>
            <div className="data">
                <img className="marker" src="/img/marker.svg" alt=""/>
                <p>{props.location}</p>
                <img className="marker" src="/img/phone.svg" alt=""/>
                <p>{props.phone}</p>
            </div>

            <div className="amarillo right"></div>
            <style jsx>{`
                
                .content {
                    height: ${props.activate ? "270px" : "0px"};
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: 30px 1fr 30px;
                    grid-template-rows: 70px 50px 150px;
                    justify-items: center;
                    align-items: center;
                    transition: height .5s;
                }

                .data {
                    height: 100px;
                    display: grid;
                    grid-template-columns: 50px 1fr;
                    grid-template-rows: 1fr 1fr;
                    align-items: center;
                    justify-items: center;
                    margin: 0 10px;
                }

                h2 {
                    font-size: 18px;
                    padding: 5px 0;
                    width: 100%;
                    text-align: center;
                    background-color: var(--amarillo);
                    color: var(--mainColor);
                }

                p {
                    align-self: center;
                    color: white;
                    font-size: 20px;
                    margin: 0 30px;
                    justify-self: flex-start;
                }

                .img {
                    height: 45px;
                }

                .marker {
                    height: 30px;
                }

                .amarillo {
                    background-color: var(--amarillo);
                    height: 80%;
                    width: 100%;
                    grid-row: 1/4;
                }

                .left {
                    grid-column: 1/2;
                }

                .right {
                    grid-column: 3/4;
                }

                @media screen and (max-width: 1200px) and (min-width: 1000px) {

                    h2, p {
                        font-size: 16px;
                    }

                }
                @media screen and (max-width: 1000px) and (min-width: 800px) {
                    
                    h2, p {
                        font-size: 14px;
                    }
                    
                }
                
            `}</style>
        </section>
    )
}

export default FeatureUno
