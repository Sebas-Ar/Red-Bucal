import bcrypt from "bcryptjs"
import withMiddleware from "../../middlewares/withMiddleware"

const handler = async (req, res) => {
    if (req.method === 'POST') {

        const { identification, password } = req.body

        try {

            const admin = await req.db.collection('admin').findOne({ identification })

            if (admin) {

                const result = await bcrypt.compare(password, admin.password)

                if (result) {

                    req.session.adminId = admin._id

                    if (req.session.userId) {
                        delete req.session.userId
                    }

                    if (req.session.businessId) {
                        delete req.session.businessId
                    }

                    res.send({
                        status: 'ok_admin',
                        message: `Bienvenido de vuelta ${admin.name}`,
                        id: admin._id
                    })

                } else {
                    res.send({
                        status: 'error',
                        message: 'contraseña invalida'
                    })
                }

            } else {

                res.send({
                    status: 'error',
                    message: 'El usuario no existe'
                })

            }

        } catch (error) {
            res.send({
                status: 'error',
                message: error.toString()
            })
        }

    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)