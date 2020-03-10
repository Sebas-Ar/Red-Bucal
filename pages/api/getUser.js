import withMiddleware from '../../middlewares/withMiddleware'


const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { identification } = req.body
        try {

            const user = await req.db.collection('users').findOne({ identification })
            res.send({ message: user })

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