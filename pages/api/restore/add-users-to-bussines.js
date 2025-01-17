// import bcrypt from "bcryptjs";
import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../../backend/db'
import withMiddleware from '../../../middlewares/withMiddleware'

const handler = async (req, res) => {
    const mongoClient = await connectToDatabase()
    if (req.method === 'POST') {
        const { usersList, bussinesID } = req.body

        try {
            usersList.forEach(async user => {
                await mongoClient.db.collection('bussines').findOneAndUpdate({
                    _id: ObjectId(bussinesID)
                },
                {
                    $push: {
                        identifications: {
                            id: user.id,
                            name: user.name
                        }
                    }
                })
            })

            console.log('finalizo el for')
        } catch (error) {
            console.log(error)
        }

        res.send({
            message: 'respuesta'
        })
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)
