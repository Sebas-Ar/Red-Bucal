import validator from "email-validator";
import withMiddleware from '../../middlewares/withMiddleware'
import bcrypt from "bcryptjs"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, lastname, adress, password, phone, email, identification, birthdate, know } = req.body

        if (!validator.validate(email)) {

            res.json({
                status: 'error',
                message: 'el correo es invalido'
            })

        } else {

            try {
                const count = await req.db.collection('admin').countDocuments({ email })

                if (count) {

                    res.send({
                        status: 'error',
                        message: 'El correo ya ha sido registrado',
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
                        birthdate,
                        adress,
                        phone,
                    })

                    res.status(201).json({
                        status: 'ok',
                        message: 'Administrador agregado satisfactoriamente',
                        token: user.insertedId
                    })

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