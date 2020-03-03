import React from 'react'

const Banner = () => {
    return (
        <section className="content">

            <div className="diente1"></div>
            <div className="text">
                <hgroup>
                    <h2>
                        <span className="clinicas">CLINICAS</span>
                        <span className="profesionales">PROFESIONALES</span>
                    </h2>  
                </hgroup>
            </div>
            <div className="diente2"></div>

            <style jsx>{`

                .diente1 {
                    background-image: url("/img/diente-banner1.png");
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    background-position: bottom;
                }

                .diente2 {
                    background-image: url("/img/diente-banner2.png");
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    background-position: right center;
                }
                
                .content {
                    height: 500px;
                    display: grid;
                    grid-template-columns: 1fr 7fr 1fr;
                    background-image: url("/img/banner.png");
                    background-size: auto 100%;
                }    

                .text {
                    color: white;
                    justify-self: center;
                    align-self: center;
                }

                h2 {
                    display: grid;
                }

                .clinicas {
                    font-weight: 200;
                    letter-spacing: 8px;
                    font-size: 30px;
                }

                .profesionales {
                    font-size: 90px;
                    margin-top: -30px;
                }   

                hgroup {
                    display: grid;
                }

                h5 {
                    margin-top: 30px;
                    text-align: center;
                    justify-self: center;
                    font-size: 22px;
                    font-weight: 200;
                    width: 500px;
                }
                
            `}</style>
        </section>
    )
}

export default Banner