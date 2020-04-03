import React, { useState, useEffect } from 'react'
import Nav from '../nav/nav'
import NavPhone from '../nav/NavPhone'


const Layout = (props) => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const size = screen.width
        setWidth(size)
        console.log(size)
    })

    return (
        <React.Fragment>
            {
                width > 820
                ?
                <Nav />
                :
                <NavPhone />
            }
            {props.children}

        </React.Fragment>
    )
}

export default Layout
