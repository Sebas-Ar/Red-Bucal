import React, { useState, useEffect } from 'react'
import Feature from '../Feature'
import FeatureUno from '../FeatureUno'

const LayoutInfoClinics = (props) => {

    return (
        <article className="content">

            <div className="barraAmarilla"><h3>{props.location[props.clinic].name}</h3></div>
            <div className="info">
                <div className="amarillo"></div>
                <FeatureUno titulo="INFORMACIÓN" img="/img/info.svg" location={props.location[props.clinic].location} phone={props.location[props.clinic].contact}/>
                <div className="linea"></div>
                <Feature 
                    titulo="ESPECIALISTAS" 
                    img="/img/feature1.png"
                />
                <div className="amarillo"></div>
            </div>

            <style jsx>{`
                
                .content {
                    margin-top: 100px;
                    display: grid;
                    grid-template-rows: 85px 1fr;
                }  

                .barraAmarilla {
                    background-color: var(--amarillo);
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    padding: 0 20px;
                }

                h3 {
                    font-size: 25px;
                    color: var(--mainColor);
                    text-align: center;
                }

                .info {
                    background-color: var(--mainColor);
                    display: grid;
                    grid-template-columns: 30px 1fr 2px 1fr 30px;
                }

                .amarillo {
                    background-color: var(--amarillo);
                    height: 50%;
                    align-self: center;
                }

                .linea {
                    background-color: white;
                    height: 70%;
                    align-self: center;
                }

                @media screen and (max-width: 1010px) {
                    .info {
                        grid-template-columns: 1fr;
                    }

                    .amarillo, .linea {
                        display: none;
                    }
                }

                @media screen and (max-width: 420px) {

                    .barraAmarilla {
                        padding: 0 0px;
                    }

                    h3 {
                        font-size: 20px;
                    }

                }
            
            `}</style>
        </article>
    )
}

export default LayoutInfoClinics
