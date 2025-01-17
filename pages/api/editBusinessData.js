import { connectToDatabase } from '../../backend/db'
import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {
    if (req.method === 'PUT') {
        const mongoClient = await connectToDatabase()
        const { RUC, RUCRUCChange, businessPhone, businessAdress, businessMail } = req.body
        const count = await mongoClient.db.collection('bussines').findAndModify(
            { RUC: RUC },
            [['_id', 'asc']],
            {
                $set: {
                    RUC: RUCRUCChange,
                    businessPhone: businessPhone,
                    businessAdress: businessAdress,
                    businessMail: businessMail
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
