import validator from "email-validator";
import withMiddleware from "../../middlewares/withMiddleware";
import bcrypt from "bcryptjs";
import sgMail from "@sendgrid/mail";

const handler = async (req, res) => {
    if (req.method === "GET") {
        res.status(200).json({
            status: "ok",
            message: insuranceList,
        });
    } else if (req.method === "POST") {
        const { name, phone, password, email, data, RUC } = req.body;

        try {
            if (!validator.validate(email)) {
                return res.json({
                    status: "error",
                    message: "el correo es invalido",
                });
            }
            const countEmail = await req.db
                .collection("bussines")
                .countDocuments({ businessMail: email });

            if (countEmail) {
                return res.json({
                    status: "error",
                    message: "El correo ya ha sido registrado",
                });
            }

            const countRUC = await req.db
                .collection("bussines")
                .countDocuments({ RUC });

            if (countRUC) {
                return res.json({
                    status: "error",
                    message: "El RUC ya ha sido registrado",
                });
            }

            let erroMessage = [];
            let cuotaAsegurado;

            for (let i = 9; i < data.length; i++) {
                let numErrors = erroMessage.length;

                let identification = data[i][1] + "";

                const user = await req.db
                    .collection("users")
                    .findOne({ identification });

                erroMessage[numErrors] = { row: i + 8 };
                if (user) {
                    if (user.plan == true) {
                        if (user.RUC !== RUC) {
                            erroMessage[numErrors][
                                "errorId"
                            ] = `El usuario registrado con la cedula ${identification} ya cuenta con una afiliacion a una entidad vigente`;
                        }
                    } else {
                        if (user.state === true) {
                            erroMessage[numErrors][
                                "errorId"
                            ] = `El usuario registrado con la cedula ${identification} ya cuenta con una cuenta personal activa`;
                        }
                    }
                }

                if (
                    JSON.stringify(erroMessage[numErrors]) ===
                    `{"row":${i + 8}}`
                ) {
                    erroMessage.pop();
                }
            }
            console.log(erroMessage);
            if (erroMessage.length) {
                return res.json({
                    status: "fileError",
                    message: erroMessage,
                });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            let identifications = [];

            for (let i = 9; i < data.length; i++) {
                identifications.push({
                    id: data[i][1] + "",
                    name: data[i][0],
                });
            }

            cuotaAsegurado = data[7][1];

            if (!cuotaAsegurado) {
                return res.json({
                    status: "error",
                    message: "El excel no incluye la cuota por cada asegurado",
                });
            }

            const date = new Date();
            const end = new Date();
            end.setMonth(end.getMonth() + 1);

            const business = await req.db.collection("bussines").insertOne({
                state: true,
                name,
                RUC,
                start: date,
                end: end,
                password: hashedPassword,
                businessPhone: phone,
                businessMail: email,
                identifications,
                plan: false,
                terminos: true,
                date,
            });

            req.session.businessId = await business.insertedId;

            for (let i = 9; i < data.length; i++) {
                console.log("send email to " + data[i][4]);
                sgMail.setApiKey(process.env.TOKEN_SEND_GRID);

                const contentHTML = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <title>Correo</title>
                    </head>
                    <body>
                        <h2>¡Bienvenido a tu programa de beneficios RED BUCAL CORPORATIVO!</h2>
                        <br />
                        <p>Nuestros especialistas están listos para atenderte en cualquiera de nuestras sucursales. Ingresando a <a href="www.redbucal.com">www.redbucal.com</a> tendrás acceso a tu perfil y todos los beneficios de la cobertura</p>
                        <br />
                        <img src="/img/email/emailCorporativo.png" alt="Corporativo red bucal" />
                        <br />
                        <p>Síguenos nuestras redes como:</p>
                        <p><a href="https://www.instagram.com/red_bucal/">Instagram</a> red_bucal</p>
                        <p><a href="https://www.facebook.com/pages/category/Product-Service/Red-Bucal-103457618545667/">Facebook</a> red_bucal</p>
                        <p><a href="https://www.linkedin.com/company/redbucal">Linkedln</a> red_bucal</p>
                        <br />
                        <p>Para más información, puedes comunicarte con nosotros al teléfono +507 63281368</p>
                        <br />
                        <p>El equipo de Red Bucal</p>
                    </body>
                    </html>
                `;
                const msg = {
                    to: data[i][4],
                    /* from: 'xevaz.ariasd@gmail.com', */
                    from: "redbucal.info@gmail.com",
                    subject: "Plan Corporativo - Red Bucal",
                    text: "esete es el texto de inicio",
                    html: contentHTML,
                };

                try {
                    sgMail.send(msg);
                } catch (error) {
                    console.log(error);
                }
                let identification = data[i][1] + "";

                const user = await req.db
                    .collection("users")
                    .findOne({ identification });

                if (!user) {
                    const hashedPasswordUser = await bcrypt.hash(
                        data[i][1] + "",
                        salt
                    );

                    let userToDepend;

                    if (data[i][2]) {
                        userToDepend = await req.db
                            .collection("users")
                            .findOneAndUpdate(
                                { identification: data[i][2] + "" },
                                {
                                    $push: {
                                        dependientes: {
                                            name: data[i][0],
                                            id: data[i][1],
                                            state: true,
                                        },
                                    },
                                }
                            );
                    }
                    console.log("usuario \n");
                    console.log(userToDepend);

                    await req.db.collection("users").insertOne({
                        RUC,
                        state: true,
                        start: date,
                        end: end,
                        name: data[i][0],
                        identification: data[i][1] + "",
                        birthdate: data[i][3],
                        adress: "",
                        phone: data[i][5],
                        email: data[i][4],
                        password: hashedPasswordUser,
                        know: 5,
                        plan: true,
                        service: false,
                        terminos: true,
                        historial: [],
                        mustChangePass: true,
                        alerts: {
                            week: false,
                            month: false,
                        },
                        date,
                        dependeOf: data[i][2]
                            ? {
                                  name: userToDepend.value.name,
                                  id: data[i][2],
                              }
                            : "",
                        dependientes: [],
                    });
                } else {
                    await req.db.collection("users").updateOne({
                        RUC,
                        state: true,
                        start: date,
                        end: end,
                        phone: data[i][5],
                        email: data[i][4],
                        plan: true,
                        dependeOf: data[i][2] ? data[i][2] : "",
                        dependientes: [],
                    });

                    if (data[i][2]) {
                        await req.db.collection("users").findOneAndUpdate(
                            { identification: data[i][2] + "" },
                            {
                                $push: {
                                    dependientes: data[i][1] + "",
                                },
                            }
                        );
                    }
                }
            }

            res.status(200).json({
                status: "ok",
                insurance: business.ops[0],
                info: {
                    num: identifications.length,
                    value: identifications.length * cuotaAsegurado,
                },
            });
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
