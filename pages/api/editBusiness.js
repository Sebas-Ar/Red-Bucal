import withMiddleware from '../../middlewares/withMiddleware'
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
    if (req.method === 'PUT') {
        const { identification, state, identifications} = req.body

        for (let i = 0; i < identifications.length; i++) {
            
            await req.db.collection('users').findAndModify(
                { "identification": identifications[i].id },
                [['_id', 'asc']],
                { "$set": { "state": state } },
                { "new": true }
            )
        }
        const count = await req.db.collection('bussines').findAndModify(
            { "NIT": identification },
            [['_id', 'asc']],
            { "$set": { "state": state } },
            { "new": true }
        )
        res.send({
            data: count.value,
            status: 'ok'
        })
    } else {
        res.status(405).end();
    }
}

export default withMiddleware(handler)