import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {
    if (req.method === 'PUT') {

        const { identification, historial, fecha, hora, tratamiento } = req.body

        console.log(historial)
        let newHistorial = historial
        
        newHistorial.push({
            fecha,
            hora,
            tratamiento
        })

        const count = await req.db.collection('users').findAndModify(
            { "identification": identification },
            [['_id', 'asc']],
            { "$set": { "historial": newHistorial } },
            { "new": true }
        )
        
        res.send({
            data: count.value,
            status: 'ok'
        })
    } else {
        res.status(405).end();
    }
}

export default withMiddleware(handler)