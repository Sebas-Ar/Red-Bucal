import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from "react-map-gl";


const PanamaMap = (props) => {

    const [viewPort, setViewPort] = useState({
        latitude: 8.708158,
        longitude: -79.757642,
        width: '100%',
        height: '80vh',
        zoom: 8.7                                  
    });

    const [myPosition, setMyPosition] = useState({});

    useEffect(() => {
        const width = screen.width

        if (width < 460) {
            setViewPort(Object.assign({}, viewPort, { width: undefined + 'px', zoom: 8}))
        } else {
            setViewPort(Object.assign({}, viewPort, { width: undefined + 'px'}))
        }

        const succeed = (pos) => {
            setMyPosition({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            })
            console.log('mi latitud' + pos.coords.latitude)
            console.log('mi longitud' + pos.coords.longitude)
        } 

        const failure = (err) => {
            console.log(err)
        }

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maxinumAge: 0
        }

        navigator.geolocation.getCurrentPosition(
            succeed, failure, options
        )

    }, []);


    return (
        <div className="content">
            <p>{myPosition.latitude}, {myPosition.longitude}</p>
            <ReactMapGl 
                {...viewPort} mapboxApiAccessToken={process.env.TOKEN_MAP}
                    onViewportChange={viewPort => {
                    setViewPort(viewPort)
                }}
                mapStyle="mapbox://styles/sebas-ar/ck82lxiwb1a581iqwvh1ab3m3"
            >
                {
                    props.location.map(loc => (
                        <Marker
                            key={loc.id}
                            latitude={loc.latitude}
                            longitude={loc.longitude}
                        >
                            <button 
                                style={{ 
                                    backgroundColor: loc.color,
                                    height: loc.id === props.clinic ? '50px' : '',
                                    width: loc.id === props.clinic ? '50px' : '',
                                    transform: loc.id === props.clinic ? 'translate(-40%, -40%)' : ''
                                }} 
                                onClick={() => {props.changeClinic(loc.id)}}>
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
                }

                button {
                    z-index: 1;
                    ${
                    viewPort.zoom > 7.5
                    ?
                    viewPort.zoom < 11.315332227113439
                        ?
                        'height:' + viewPort.zoom * (viewPort.zoom - 7.5) + 'px;'
                        :
                        viewPort.zoom < 14.130664454226876
                            ?
                            'height:' + (viewPort.zoom * (viewPort.zoom - 7.5) - ((viewPort.zoom * (viewPort.zoom - 7.5))/2)) + 'px;'
                            :
                            'height:' + (viewPort.zoom * (viewPort.zoom - 7.5) - ((viewPort.zoom * (viewPort.zoom - 7.5))/1.5)) + 'px;'
                    :
                    'height: 10px;'
                    }
                    ${
                    viewPort.zoom > 7.5
                    ?
                    viewPort.zoom < 11.315332227113439
                        ?
                        'width:' + viewPort.zoom * (viewPort.zoom - 7.5) + 'px;'
                        :
                        viewPort.zoom < 14.130664454226876
                            ?
                            'width:' + (viewPort.zoom * (viewPort.zoom - 7.5) - ((viewPort.zoom * (viewPort.zoom - 7.5)) / 2)) + 'px;'
                            :
                            'width:' + (viewPort.zoom * (viewPort.zoom - 7.5) - ((viewPort.zoom * (viewPort.zoom - 7.5)) / 1.5)) + 'px;'
                    :
                    'width: 10px;'
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
