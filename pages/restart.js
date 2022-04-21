import axios from 'axios'
import userList from '../public/data.json'

const Restart = () => {

    const updateDB = async () => {
        console.log(userList.length, 'hola')
        const response = await axios.post('/api/restart', {userList})
        console.log(response.data)
    }

    return <div className="container">

        <h1>Press to DB the db</h1>
        <button onClick={updateDB}>Update DB</button>

        <style jsx>{`
            .container {
            }
        `}</style>
    </div>
}

export default Restart