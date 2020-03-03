import React from 'react'

const PanamaMap = (props) => {
    return (
        <div className="content">
            
            <div className="num1 num"onClick={() => {props.setLoc(0)}}></div>
            <div className="num2 num"onClick={() => {props.setLoc(1)}}></div>
            <div className="num3 num"onClick={() => {props.setLoc(2)}}></div>
            <div className="num4 num"onClick={() => {props.setLoc(3)}}></div>

            <style jsx>{`
                
                .content {
                    position: relative;
                    margin-top: 150px;
                    height: 670px;
                    width: 100%;
                    background-image: url("/img/panama-map.png");
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: 90%;
                }    

                .num {
                    position: absolute;
                    height: 110px;
                    width: 110px;
                    cursor: pointer;
                }

                .num1 {
                    top: 35%;
                    left: 18%;
                }

                .num2 {
                    top: 22%;
                    right: 39.5%;
                }

                .num3 {
                    bottom: 29%;
                    right: 21%;
                }

                .num4 {
                    bottom: 18.5%;
                    left: 36.5%;
                }
                
            `}</style>
        </div>
    )
}

export default PanamaMap
