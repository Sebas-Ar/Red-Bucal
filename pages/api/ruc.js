import { connectToDatabase } from '../../backend/db'
import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const mongoClient = await connectToDatabase()
        const { identification } = req.query
        console.log(identification)

        const user = await mongoClient.db
            .collection('users')
            .findOne({ identification })
        console.log(user)
        res.send({
            data: user
        })
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)
