import withMiddleware from '../../middlewares/withMiddleware'
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
    if (req.method === 'PUT') {

        const { identification, state } = req.body

        const startDate = new Date()
        let endDate = new Date()
        endDate.setFullYear(endDate.getFullYear() + 1)
        endDate.setHours(23,59,59)

        const count = await req.db.collection('users').findAndModify(
            { "identification": identification },
            [['_id', 'asc']],
            { "$set": { 
                'state': state, 
                'start': startDate, 
                'end': endDate
            }},
            {"new": true}
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