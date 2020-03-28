import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from "react-map-gl";
import location from './locations/location'

const PanamaMap = (props) => {

    const [viewPort, setViewPort] = useState({
        /* 8.748158, -79.897642 */
        latitude: 8.748158,
        longitude: -79.727642,
        width: '600px',
        height: '500px',
        zoom: 8.5 
    });
    const [TOKEN_MAP, setTOKEN_MAP] = useState(process.env.TOKEN_MAP)

    useEffect(() => {
        /* console.log(viewPort.zoom)
        console.log(props.data) */
    }, [viewPort]);

    return (
        <div className="content">
            <ReactMapGl 
                {...viewPort} mapboxApiAccessToken={TOKEN_MAP}
                    onViewportChange={viewPort => {
                    setViewPort(viewPort)
                }}
                mapStyle="mapbox://styles/sebas-ar/ck82lxiwb1a581iqwvh1ab3m3"
            >
                {
                    location.map(loc => (
                        <Marker
                            key={loc.latitude}
                            latitude={loc.latitude}
                            longitude={loc.longitude}
                        >
                            <button 
                            style={{
                                backgroundColor: loc.color
                            }} 
                            onClick={(e) => {
                                e.preventDefault()
                            }}>
                                <img src="/img/diente-form.png" alt="diente"/>
                            </button>

                        </Marker>
                    ))
                }
                
            </ReactMapGl>

            <style jsx>{`

                .content {
                    width: 100%;
                    display: grid;
                    justify-items: center;
                    margin-top: 160px;
                }

                button {
                    z-index: 1;
                    ${viewPort.zoom < 11.315332227113439
                        ?
                        'height:' + viewPort.zoom * (viewPort.zoom - 7.5) + 'px;'
                        :
                        viewPort.zoom < 14.130664454226876
                        ?
                        'height:' + (viewPort.zoom * (viewPort.zoom - 7.5) - ((viewPort.zoom * (viewPort.zoom - 7.5))/2)) + 'px;'
                        :
                        'height:' + (viewPort.zoom * (viewPort.zoom - 7.5) - ((viewPort.zoom * (viewPort.zoom - 7.5))/1.5)) + 'px;'
                    }
                    ${viewPort.zoom < 11.315332227113439
                        ?
                        'width:' + viewPort.zoom * (viewPort.zoom - 7.5) + 'px;'
                        :
                        viewPort.zoom < 14.130664454226876
                        ?
                        'width:' + (viewPort.zoom * (viewPort.zoom - 7.5) - ((viewPort.zoom * (viewPort.zoom - 7.5)) / 2)) + 'px;'
                        :
                        'width:' + (viewPort.zoom * (viewPort.zoom - 7.5) - ((viewPort.zoom * (viewPort.zoom - 7.5)) / 1.5)) + 'px;'
                    }
                    border: none;
                    cursor: pointer;
                    color: white;
                    border-radius: 50%;
                    outline: none;   
                    transition: height .5s, width .5s, transform .5s ease-in;           
                } 

                button:hover {
                    z-index: 10;
                    ${viewPort.zoom < 11.315332227113439
                        ?
                        'transform: translate(-40%,-40%);'
                        :
                        ''
                    }
                    height: 50px;
                    width: 50px;
                }

                img {
                    width: 60%;
                }
                
            `}</style>
        </div>
    )
}



export default PanamaMap
