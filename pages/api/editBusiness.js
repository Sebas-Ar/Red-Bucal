import { connectToDatabase } from '../../backend/db'
import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {
    if (req.method === 'PUT') {
        const mongoClient = await connectToDatabase()
        const { identification, state, identifications } = req.body

        const startDate = new Date()
        const endDate = new Date()
        endDate.setMonth(endDate.getMonth() + 1)
        endDate.setHours(23, 59, 59)

        for (let i = 0; i < identifications.length; i++) {
            await mongoClient.db.collection('users').findAndModify(
                { identification: identifications[i].id },
                [['_id', 'asc']],
                {
                    $set: {
                        state: state,
                        start: startDate,
                        end: endDate
                    }
                },
                { new: true }
            )
        }
        const count = await mongoClient.db.collection('bussines').findAndModify(
            { RUC: identification },
            [['_id', 'asc']],
            {
                $set: {
                    state: state,
                    start: startDate,
                    end: endDate
                }
            },
            { new: true }
        )
        res.send({
            data: count.value,
            status: 'ok'
        })
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)
