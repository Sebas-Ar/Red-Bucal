import bcrypt from "bcryptjs"
import withMiddleware from "../../middlewares/withMiddleware"

const handler = async (req, res) => {
    if( req.method === 'POST' ) {
        const { identification, password } = req.body

        try {
        
        const user = await req.db.collection('users').findOne({identification})

        if ( user ) {

            const result = await bcrypt.compare(password, user.password)

            if (result) {

                req.session.userId = user._id

                res.send({
                    status: 'ok',
                    message: `Bienvenido de vuelta ${user.name}`,
                    id: user._id
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