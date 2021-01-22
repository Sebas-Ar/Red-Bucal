import Axios from "axios"
import { useEffect, useState } from "react"

const AfiliadosList = ({name, setToggleAfiliados}) => {

    const [afiliados, setafiliados] = useState([])
    const [filter, setFilter] = useState({})
    const [activeFilter, setActiveFilter] = useState(true)
    const [typeFilter, setTypeFilter] = useState('users');

    useEffect(() => {
        getAfiliados('users')
    }, [])

    useEffect(() => {

        if (filter.start && filter.end) {
            const start = filter.start.split('-').map(num => Number(num))
            const end = filter.end.split('-').map(num => Number(num))
            const restDate = [end[0] - start[0], end[1] - start[1], end[2] - start[2]]
            
            if (restDate[0] >= 0) {
                if (restDate[1] >= 0) {
                    if (restDate[2] >= 0) {
                        setActiveFilter(false)
                    } else {
                        setActiveFilter(true)
                        console.log('el intervalo no de tiempo no es valido')
                    }
                } else {
                    setActiveFilter(true)
                    console.log('el intervalo no de tiempo no es valido')
                }
            } else {
                setActiveFilter(true)
                console.log('el intervalo no de tiempo no es valido')
            }

            console.log(restDate)
            
        }

    }, [filter])

    const onChangeFliter = e => {
        
        setFilter(Object.assign({}, filter, {[e.target.name]: e.target.value}))

    }

    const getAfiliados = async (type = '') => {
        const url = `/api/getClinics?type=${type}&name=${name}`
        const response = await Axios.get(url)
        setafiliados(response.data.message)
        setTypeFilter(type)
    }

    const onSubmitFilter = async e => {
        e.preventDefault()
        const url = `/api/getClinics?type=${typeFilter}&name=${name}&start=${filter.start}&end=${filter.end}`
        const response = await Axios.get(url)
        setafiliados(response.data.message)
    }

    const formarISODate = (ISOdate) => {

        const date = new Date(ISOdate)

        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` 
    }

    return <div className="container">

        <section>
            <h3>AFILIADOS A {name.toUpperCase()}</h3>
            <svg onClick={() => setToggleAfiliados(false)} viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
            </svg>
            <p>Seleccione las fechas para realizar el filtro:</p>
            <form onSubmit={onSubmitFilter}>
                <input type="date" name="start" onChange={onChangeFliter}/>
                <input type="date" name="end" onChange={onChangeFliter}/>
                <button disabled={activeFilter}>filtrar</button>
            </form>
            <div className="buttons-waraper">
                <button onClick={() => getAfiliados('users')} disabled={typeFilter === 'users' ? true : false}>usuarios afiliados</button>
                <button onClick={() => getAfiliados('bussines')} disabled={typeFilter === 'bussines' ? true : false }>empresas afiliadas</button>
            </div>
            <span className="inscripciones">numero de afiliados: {afiliados.length}</span>
            <ul>
                <li>
                    <p>NOMBRE</p>
                    <p>ID</p>
                    <p>INSCRIPCIÓN</p>
                </li>
                <div className="linea"></div>
                <div className="content">

                {
                    afiliados
                    ?
                    afiliados.map((item, index) => (
                        <li key={index}>
                                <span>{item.name}</span>
                                <span>{item.identification ? item.identification : item.RUC}</span>
                                <span>{formarISODate(item.date)}</span>
                            </li>
                        ))
                        :
                        <li>
                            La clinica no cuenta con afiliados
                        </li>
                }
                </div>
            </ul>

        </section>

        <style jsx>{`

            .container {
                top: 0;
                left: 0;
                position: fixed;
                background: #33333388;
                height: 100vh;
                width: 100%;
                display: grid;
                align-items: center;
                justify-items: center;
            }

            section {
                position: relative;
                align-self: center;
                grid-column-gap: 10px;
                margin: 0 50px;
                background: white;
                padding: 30px;
                border-radius: 30px;
            }

            .buttons-waraper {
                display: flex;
                justify-content: space-around;
            }

            h3 {
                margin: 20px;
            }

            svg {
                position: absolute;
                top: 0;
                right: 0;
                width: 30px;
                color: var(--puntoRojo);
                margin: 20px;
                cursor: pointer;
            }

            .linea {
                grid-column: 1/4;
                height: 2px;
                background: var(--puntoRojo);
            }

            li {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-column-gap: 2rem;
                margin: 10px 0;
            }

            .content {
                max-height: 300px;
                overflow: auto;
            }

            p {
                text-align: center;
                color: var(--mainColor);
                font-weight: bold;
            }

            button {
                cursor: pointer;
                border: none;
                background-color: var(--mainColor);
                color: white;
                padding: 10px;
                border-radius: 5px;
                transition: background-color .5s;
            }

            button:disabled {
                cursor: default;
                background-color: #091C4755;
            }
            form {
                margin: 20px 0;
                display: flex;
                justify-content: space-around;
            }

            input {
                padding: 6px;
                border: none;
                cursor: pointer;
            }

            .inscripciones {
                display: block;
                margin: 20px 0;
            }

        `}</style>
    </div>
}

export default AfiliadosList