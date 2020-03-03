import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Out = () => {

    const router = useRouter()
    
    useEffect(() => {
        router.replace("/")
    }, [])

    return (
        <div>
        </div>
    )
}

export default Out
