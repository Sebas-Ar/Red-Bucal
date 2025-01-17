import { connectToDatabase } from '../../backend/db'
import withMiddleware from '../../middlewares/withMiddleware'

const handler = async (req, res) => {
    if (req.method === 'DELETE') {
        const mongoClient = await connectToDatabase()
        try {
            const { identification } = req.query
            console.log(identification)

            const user = await mongoClient.db
                .collection('users')
                .findOne({ identification })

            if (user.plan === true) {
                if (user.RUC === '' || !user.RUC) {
                    await mongoClient.db
                        .collection('users')
                        .deleteOne({ identification })

                    res.send({
                        status: 'ok',
                        message: 'Usuario eliminado '
                    })
                } else {
                    const empresa = await mongoClient.db
                        .collection('bussines')
                        .findOne({ RUC: user.RUC })

                    res.send({
                        status: 'ok',
                        message: `El usuario no puede ser eliminado, Está afiliado a una empresa o aseguradora llamada ${empresa.name}`
                    })
                }
            } else {
                if (user.dependientes && user.dependientes.length) {
                    res.send({
                        status: 'ok',
                        message:
                            'El usuario no puede ser eliminado, ya que cuenta con usuarios depedendientes, por favor elimine los dependientes para poder eliminar el principal'
                    })
                } else if (user.dependeOf && user.dependeOf.id) {
                    if (user.state === true) {
                        res.send({
                            status: 'error',
                            message:
                                'El usuario dependiente tiene una cuenta activa'
                        })
                    } else {
                        const userDepend = await mongoClient.db
                            .collection('users')
                            .findOne({
                                identification: user.dependeOf.id + ''
                            })

                        await mongoClient.db.collection('users').updateOne(
                            { identification: user.dependeOf.id + '' },
                            {
                                $set: {
                                    dependientes:
                                        userDepend.dependientes.filter(
                                            (ident) =>
                                                ident.id !== identification
                                        )
                                }
                            }
                        )

                        await mongoClient.db
                            .collection('users')
                            .deleteOne({ identification })

                        res.send({
                            status: 'ok',
                            message: `el usuario que dependia de ${userDepend.name} fué eliminado`
                        })
                    }
                } else {
                    await mongoClient.db
                        .collection('users')
                        .deleteOne({ identification })

                    res.send({
                        status: 'ok',
                        message: `el usuario ${user.name} ha sido eliminado`
                    })
                }
            }
        } catch (error) {
            res.send({
                status: 'error',
                message: 'error al eliminar el usuario'
            })
        }
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)
