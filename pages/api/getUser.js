import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../backend/db'
import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {
    const mongoClient = await connectToDatabase()
    if (req.method === 'GET') {
        const { query } = req
        let data

        if (query.identification) {
            data = await mongoClient.db.collection('users').findOne({ identification: query.identification })
        } else {
            data = await mongoClient.db.collection('users').findOne({ _id: ObjectId(query.id) })
        }

        res.send({ message: data })
    } else if (req.method === 'POST') {
        const { identification } = req.body
        try {
            const user = await mongoClient.db.collection('users').aggregate(aggregateId(identification)).toArray()
            if (user.length === 0) {
                const user = await mongoClient.db.collection('users').aggregate(aggregateName(identification)).toArray()
                res.send({ message: user })
            } else {
                res.send({ message: user })
            }
        } catch (error) {
            res.json({
                status: 'error',
                message: error.toString()
            })
        }
    } else {
        res.status(405).end()
    }
}

const aggregateId = (identification) => (
    [
        {
            $match: {
                identification: { $regex: identification === '' ? '.' : identification, $options: 'i' }
            }
        },
        {
            $project: {
                name: true,
                identification: true
            }
        }
    ]
)

const aggregateName = (identification) => (
    [
        {
            $match: {
                name: { $regex: identification === '' ? '.' : identification, $options: 'i' }
            }
        },
        {
            $project: {
                name: true,
                identification: true
            }
        }
    ]
)

export default withMiddleware(handler)
