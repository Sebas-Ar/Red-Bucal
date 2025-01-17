import { connectToDatabase } from '../../backend/db'
import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {
    if (req.method === 'PUT') {
        const mongoClient = await connectToDatabase()
        const { identification, state } = req.body
        let count = {}

        if (state) {
            const startDate = new Date()
            const endDate = new Date()
            endDate.setFullYear(endDate.getFullYear() + 1)
            endDate.setHours(23, 59, 59)

            count = await mongoClient.db.collection('users').findAndModify(
                { identification: identification },
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
        } else {
            count = await mongoClient.db.collection('users').findAndModify(
                { identification: identification },
                [['_id', 'asc']],
                {
                    $set: {
                        state: state,
                        start: '',
                        end: ''
                    }
                },
                { new: true }
            )
        }
        if (count.value.dependeOf) {
            const mainUser = await mongoClient.db
                .collection('users')
                .findOne({ identification: count.value.dependeOf.id })

            console.log(mainUser)
            await mongoClient.db.collection('users').updateOne(
                { identification: count.value.dependeOf.id },
                {
                    $set: {
                        dependientes: mainUser.dependientes.map((dep) => {
                            console.log(dep.id, identification)
                            if (dep.id === identification) {
                                dep.state = state
                                return dep
                            } else {
                                return dep
                            }
                        })
                    }
                }
            )
        }

        res.send({
            data: count.value,
            status: 'ok'
        })
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)
