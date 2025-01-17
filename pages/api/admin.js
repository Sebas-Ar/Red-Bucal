import bcrypt from 'bcryptjs'
import validator from 'email-validator'
import { connectToDatabase } from '../../backend/db'
import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const mongoClient = await connectToDatabase()
        const { name, phone, password, addres, provincia, corregimiento, email } = req.body

        if (!validator.validate(email)) {
            res.json({
                status: 'error',
                message: 'el correo es invalido'
            })
        } else {
            try {
                const countEmail = await mongoClient.db.collection('admin').countDocuments({ email })

                if (countEmail) {
                    res.send({
                        status: 'error',
                        message: 'El correo ya ha sido registrado'
                    })
                } else {
                    const countId = await mongoClient.db.collection('admin').countDocuments({ name })

                    if (countId) {
                        res.send({
                            status: 'error',
                            message: 'Nombre ya registrado'
                        })
                    } else {
                        const salt = await bcrypt.genSalt(10)
                        const hashedPassword = await bcrypt.hash(password, salt)
                        const date = new Date()
                        console.log(date.getDate)
                        const clinic = await mongoClient.db.collection('admin').insertOne({
                            name: name,
                            email,
                            password: hashedPassword,
                            adress: `${provincia}, ${corregimiento}, ${addres}`,
                            phone
                        })

                        res.status(201).json({
                            status: 'ok',
                            message: 'Clínica agregada',
                            clinic: clinic.ops[0]
                        })
                    }
                }
            } catch (error) {
                res.json({
                    status: 'error',
                    message: error.toString()
                })
            }
        }
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)
