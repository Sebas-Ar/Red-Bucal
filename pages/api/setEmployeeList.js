import validator from "email-validator";
import withMiddleware from '../../middlewares/withMiddleware'
import bcrypt from "bcryptjs"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { excel, RUC, identifications} = req.body  
        let encontrar

        for (let i = 6; i < excel.length; i++) {
            try {
                const identification = excel[i][2]
                const count = await req.db.collection('users').countDocuments({ identification })

                if (count) {

                    console.log(`ya existe ${identification}`);

                } else {

                    const salt = await bcrypt.genSalt(10)
                    const hashedPassword = await bcrypt.hash(identification, salt)
                    const user = await req.db.collection('users').insertOne({
                        RUC,
                        state: false,
                        date: excel[i][0],
                        name: excel[i][1],
                        identification: excel[i][2],
                        birthdate: excel[i][3],
                        adress: excel[i][4],
                        phone: excel[i][5],
                        email: excel[i][6],
                        password: hashedPassword,
                        know: 5,
                        plan: false,
                        service: false,
                        terminos: true,
                        historial: [],
                    })

                    let validate = true;
                    for (let j = 0; j < identifications.length; j++) {
                        if (identifications[j].id === excel[i][2]) {
                            validate = false
                        }
                    }
                    if(validate) {
                        identifications.push({
                            id: excel[i][2],
                            name: excel[i][1]
                        })
                    }

                    encontrar = await req.db.collection('bussines').findAndModify(
                        { "RUC": RUC },
                        [['_id', 'asc']],
                        { "$set": { "identifications": identifications } },
                        { "new": true }
                    )

                    console.log(encontrar)

                }
                
            } catch (error) {
                console.log(error);
            }
        }

        let business = {};

        for (let i = 0; i < identifications.length; i++) {

            let validate = false

            for (let j = 0; j < excel.length; j++) {
                if (identifications[i].id === excel[j][2]) {
                    validate = true
                }
            }

            if(!validate) {

                await req.db.collection('users').deleteOne({ "identification": identifications[i].id })

                let pos = 0;

                for (let k = 0; k < identifications.length; k++) {
                    if (identifications[k].id === identifications[i].id) {
                        pos = k
                    }
                }

                identifications.splice(pos, 1)

                business = await req.db.collection('bussines').findAndModify(
                    { "RUC": RUC },
                    [['_id', 'asc']],
                    { "$set": { "identifications": identifications } },
                    { "new": true }
                )

                console.log(business)

            }

        }

        res.status(201).json({
            status: 'ok',
            message: 'Empresa actualizada satisfactoriamente',
            data: encontrar
        })

    } else {

        res.status(405).end();

    }

}

export default withMiddleware(handler);