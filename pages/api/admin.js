import validator from "email-validator";
import withMiddleware from '../../middlewares/withMiddleware'
import bcrypt from "bcryptjs"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, lastname, adress, password, phone, email, identification, day, month, year } = req.body

        if (!validator.validate(email)) {

            res.json({
                status: 'error',
                message: 'el correo es invalido'
            })

        } else {

            try {
                const countEmail = await req.db.collection('admin').countDocuments({ email })

                if (countEmail) {

                    res.send({
                        status: 'error',
                        message: 'El correo ya ha sido registrado',
                    });

                } else {

                    const countId = await req.db.collection('admin').countDocuments({ identification })

                    if (countId) {
                        res.send({
                            status: 'error',
                            message: 'La cedula de ciudadania ya ha sido registrada',
                        });
                    } else {

                        const salt = await bcrypt.genSalt(10)
                        const hashedPassword = await bcrypt.hash(password, salt)
                        const date = new Date;
                        console.log(date.getDate);
                        const user = await req.db.collection('admin').insertOne({
                            name: name + ' ' + lastname,
                            identification,
                            email,
                            password: hashedPassword,
                            birthdate: day + '/' + month + '/' + year,
                            adress,
                            phone,
                        })

                        res.status(201).json({
                            status: 'ok',
                            message: 'Administrador agregado satisfactoriamente',
                            token: user.insertedId
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

        res.status(405).end();

    }

}

export default withMiddleware(handler);