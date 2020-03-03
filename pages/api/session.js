import withMiddleware from "../../middlewares/withMiddleware"

const handler = (req, res) => {
    if (req.method === 'GET') {
        if (req.user) {
            const { name, identification } = req.user

            res.status(200).send({
                status: 'ok',
                data: {
                    isLoggedIn: true,
                    user: req.user
                }
            })
        } else {
            res.status(200).send({
                status: 'ok',
                data: {
                    isLoggedIn: false,
                    user: {}
                }
            })
        }
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)