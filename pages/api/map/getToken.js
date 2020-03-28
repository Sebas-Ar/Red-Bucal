
const handler = async (req, res) => {
    if (req.method === 'GET') {
        const dat = process.env.TOKEN_MAP
        res.send({
            status: 'ok',
            message: dat
        })
    } else {
        res.status(405).end();
    }
}

export default handler