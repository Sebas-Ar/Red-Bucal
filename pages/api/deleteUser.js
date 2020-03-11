import withMiddleware from '../../middlewares/withMiddleware'


const handler = async (req, res) => {
    if (req.method === 'POST') {

        const { identification, identifications, NIT, tamaño } = await req.body
        await req.db.collection('users').deleteOne({ "identification": identification })
        console.log(identification, identifications, NIT, tamaño);

        let pos = 0;

        for (let i = 0; i < tamaño; i++) {
            if (identifications[i].id === identification) {
                pos = i
            }
        }

        identifications.splice(pos,1)

        const count = await req.db.collection('bussines').findAndModify(
            { "NIT": NIT },
            [['_id', 'asc']],
            { "$set": { "identifications": identifications } },
            { "new": true }
        )

        res.send({
            message: count
        })

    } else {

        res.status(405).end();

    }

}

export default withMiddleware(handler);