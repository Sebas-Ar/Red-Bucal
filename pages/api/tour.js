import { connectToDatabase } from '../../backend/db'
import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const mongoClient = await connectToDatabase()
        const { email } = req.body

        await mongoClient.collection('users').update({ email }, { $set: { tour: false } })

        res.status(200).json({
            status: 'ok',
            message: 'Cambio de contraseña exitoso'
        })
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)
