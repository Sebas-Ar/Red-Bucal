import React, { useState, useEffect } from 'react'
import Feature from '../Feature'

const LayoutFeatures = (props) => {

    const [parrafo, setParrafo] = useState([]);
    
    useEffect(() => {
        if (props.location === 0) {
            setParrafo([
                'consectetur adipisicing elit. Modi, quia? Cumque quaerat placeat aspernatur corrupti rerum aperiam ducimus magnam nisi.',
                'sit amet consectetur adipisicing elit. Modi, quia?  aspernatur corrupti rerum aperiam ducimus magnam nisi.',
                'Lorem ipsum dolor sit amet consectetur  aspernatur corrupti rerum aperiam ducimus magnam nisi.'
            ])
        } else if (props.location === 1) {
            setParrafo([
                'Lorem ipsum  amet consectetur adipisicing elit. Modi, quia? Cumque quaerat placeat aspernatur corrupti rerum aperiam ',
                'elit. Modi, quia? Cumque quaerat placeat aspernatur corrupti rerum aperiam ducimus magnam nisi.',
                'Modi, quia? Cumque quaerat placeat aspernatur corrupti rerum aperiam ducimus magnam nisi.'
            ])
        } else if (props.location === 2) {
            setParrafo([
                'dolor sit amet consectetur adipisicing elit. Modi, quia? Cumque quaerat placeat aspernatur corrupti rerum aperiam ducimus magnam nisi.',
                'sit amet consectetur adipisicing elit. Modi, quia? Cumque quaerat placeat aspernatur corrupti rerum aperiam ducimus magnam nisi.',
                'adipisicing elit. Modi, quia? Cumque quaerat placeat aspernatur corrupti rerum aperiam ducimus magnam nisi.'
            ])
        } else {
            setParrafo([
                'consectetur adipisicing elit. Modi, quia? Cumque quaerat placeat aspernatur corrupti rerum aperiam ducimus magnam nisi.',
                'amet consectetur adipisicing elit. Modi, quia? Cumque quaerat placeat aspernatur corrupti rerum aperiam ducimus magnam nisi.',
                'sit amet consectetur adipisicing elit. Modi, quia? Cumque quaerat placeat aspernatur corrupti rerum aperiam ducimus magnam nisi.'
            ])
        }
    }, [props.location]);

    return (
        <article className="content">

            <div className="barraAmarilla"></div>
            <div className="info">
                <div className="amarillo"></div>
                <Feature titulo="ESPECIALIDADES" img="/img/feature1.png" parrafo={parrafo[0]}/> 
                <div className="linea"></div>
                <Feature titulo="PROFESIONALES" img="/img/feature2.png" parrafo={parrafo[1]}/>
                <div className="linea"></div>
                <Feature titulo="INSTALACIONES" img="/img/feature3.png" parrafo={parrafo[2]}/>
                <div className="amarillo"></div>
            </div>

            <style jsx>{`
                
                .content {
                    margin-top: 100px;
                    height: 300px;
                    display: grid;
                    grid-template-rows: 30px 1fr;
                }  

                .barraAmarilla {
                    background-color: var(--amarillo);
                }

                .info {
                    background-color: var(--mainColor);
                    display: grid;
                    grid-template-columns: 30px 1fr 2px 1fr 2px 1fr 30px;
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
            
            `}</style>
        </article>
    )
}

export default LayoutFeatures
