import withMiddleware from '../../middlewares/withMiddleware'
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
    if (req.method === 'PUT') {
        const { identification, state } = req.body
        const count = await req.db.collection('users').findAndModify(
            { "identification": identification },
            [['_id', 'asc']],
            { "$set": { "state": state } },
            {"new": true}
            /* { "upsert": true } */
            /* , (err, result) => {
                console.log(result.value)
                return result.value
            } */
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