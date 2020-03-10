import validator from "email-validator";
import withMiddleware from '../../middlewares/withMiddleware'
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { businessName, NIT, businessAdress, businessPhone, businessMail, data, know, password } = req.body

        if (!validator.validate(businessMail)) {

            res.json({
                status: 'error',
                message: 'el correo es invalido'
            })

        } else {
            try {

                const count = await req.db.collection('bussines').countDocuments({ businessMail })

                if (count) {

                    res.send({
                        status: 'error',
                        message: 'El correo ya ha sido registrado',
                    });

                } else {

                    const salt = await bcrypt.genSalt(10)
                    const hashedPassword = await bcrypt.hash(password, salt)

                    let identifications = []

                    for (let i = 0; i < data.length; i++) {
                        identifications[i] = {
                            id: data[i][1]+'',
                            name: data[i][0]
                        }
                    }
                    console.log(identifications);

                    const business = await req.db.collection('bussines').insertOne({
                        state: false,
                        name: businessName,
                        NIT,
                        businessAdress,
                        password: hashedPassword,
                        businessPhone,
                        businessMail,
                        know,
                        identifications,
                        plan: false,
                        service: false
                    })

                    req.session.businessId = await business.insertedId

                    for (let i = 0; i < data.length; i++) {

                        const hashedPasswordUser = await bcrypt.hash(data[i][1]+'', salt)

                        const date = new Date;
                        await req.db.collection('users').insertOne({
                            NIT,
                            state: false,
                            name: data[i][0],
                            identification: data[i][1]+'',
                            email: data[i][5],
                            password: hashedPasswordUser,
                            birthdate: data[i][2],
                            adress: data[i][3],
                            phone: data[i][4],
                            know: data[i][6],
                            plan: false,
                            date: '0' + date.getDate() + ' / 0' + date.getMonth(),
                            service: false
                        })

                    }
                    res.status(201).json({
                        status: 'ok',
                        message: 'Empresa agregada satisfactoriamente',
                        token: business.insertedId
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

export default withMiddleware(handler)