import bcrypt from 'bcryptjs'
import { connectToDatabase } from '../../../backend/db'
import withMiddleware from '../../../middlewares/withMiddleware'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const mongoClient = await connectToDatabase()
        const { userList } = req.body

        console.log('numero de usurarios total: ', userList.length)
        let count = 0

        try {
            for (let i = 0; i < userList.length; i++) {
                const exist = await mongoClient.db.collection('users').countDocuments({ identification: userList[i].identification })
                if (exist) {
                    console.log('user already exist')
                }
                if (!exist) {
                    count++
                    if (count % 10 === 0) {
                        console.log(count)
                    }
                    const salt = await bcrypt.genSalt(10)
                    const hashedPassword = await bcrypt.hash(userList[i].identification, salt)

                    await mongoClient.db.collection('users').insertOne({
                        ...userList[i],
                        mustChangePass: true,
                        password: hashedPassword
                    })
                }
            }

            console.log('finalizo el for')
        } catch (error) {
            console.log(error)
        }

        console.log('numero de usuarios restaurados: ', count)

        res.send({
            message: 'respuesta',
            count
        })
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)
