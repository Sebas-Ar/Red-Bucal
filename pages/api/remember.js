import withMiddleware from '../../middlewares/withMiddleware'


const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { email } = req.body
        try {

            const user = await req.db.collection('users').findOne({ email })

            if (user) {

                console.log('envianod correo')

                res.json({
                    status: 'ok',
                    message: 'correo enviado'
                })
            } else {
                res.json({
                    status: 'error',
                    message: 'error al enviar el correo'
                })
            }

        } catch (error) {
            res.json({
                status: 'error',
                message: error.toString()
            })
        }
    } else {

        res.status(405).end();

    }

}

export default withMiddleware(handler);
