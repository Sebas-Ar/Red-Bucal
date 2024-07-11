import validator from "email-validator";
import withMiddleware from "../../middlewares/withMiddleware";
import bcrypt from "bcryptjs";
const Queue = require('node-persistent-queue');
const cliProgress = require('cli-progress');

const handler = async (req, res) => {
    const q = new Queue('./queue.sqlite');
    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

    await q.open()

    q.on('open', () => {
        console.log('Opening SQLite DB');
        console.log('Queue contains ' + q.getLength() + ' job/s');
    });

    q.on('add', async task => {
        console.log('Adding task: ' + JSON.stringify(task));
        console.log('Queue contains ' + q.getLength() + ' job/s');
    });

    q.on('start', async () => {
        console.log('Starting queue');
    });

    q.on('next', async (task) => {
        if (task.job.type === 'update') {
            await req.db.collection("users").update(
                task.job.id,
                task.job.body
            )
        } else if (task.type === 'create') {
            const salt = await bcrypt.genSalt(10);
            const hashedPasswordUser = await bcrypt.hash(
                task.job.body.$set.identification,
                salt
            );

            await req.db.collection("users").insertOne({
                ...task.body,
                password: hashedPasswordUser
            })
        }
        const sqlite = q.getSqlite3()
        // Dame el primer elemento de la tabla queue
        const getAsync = (sql) => new Promise((resolve, reject) => {
            sqlite.get(sql, (err, row) => {
                if (err) {
                    reject(err)
                }
                resolve(row)
            })
        })

        const resp = await getAsync('SELECT * FROM queue LIMIT 1')

        console.clear();
        bar1.update(resp.id);
        console.log('\n')
        q.done();
    });

    // Stop the queue when it gets empty
    q.on('empty', async () => {
        console.log('Queue contains ' + q.getLength() + ' job/');
        q.stop();
        q.close()
            .then(() => {
                process.exit(0);
            })
    });

    q.on('stop', async () => {
        console.log('Stopping queue');
    });

    q.on('close', async () => {
        console.log('Closing SQLite DB');
    });

    if (req.method === "POST") {
        const { data, RUC } = req.body;

        const entity = await req.db.collection("bussines").findOne({ RUC });
        const users = await req.db.collection('users').find().toArray();

        let erroMessage = [];
        let cuotaAsegurado;

        cuotaAsegurado = data[7][1];

        if (!cuotaAsegurado) {
            return res.json({
                status: "error",
                message: "El excel no incluye la cuota por cada asegurado",
            });
        }

        for (let i = 9; i < data.length; i++) {
            let numErrors = erroMessage.length;

            let identification = data[i][1] + "";

            erroMessage[numErrors] = { row: i + 6 };

            if (!data[i][0]) {
                erroMessage[numErrors][
                    "errorName"
                ] = `El campo del nombre del usuario se encuentra vacio`;
            }

            if (!data[i][1]) {
                erroMessage[numErrors][
                    "errorId"
                ] = `El campo de la identificaion del usuario se encuentra vacio`;
            }

            // const user = await req.db
            //     .collection("users")
            //     .findOne({ identification });
            const user = users.find(user => user.identification === identification);

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
                `{"row":${i + 6}}`
            ) {
                erroMessage.pop();
            }
        }

        if (erroMessage.length) {
            return res.json({
                status: "fileError",
                message: erroMessage,
            });
        }

        let userContinue = [];

        entity.identifications.forEach(async (user) => {
            for (let i = 9; i < data.length; i++) {
                if (user.id === data[i][1] + "") {
                    console.log(user.id, data[i][1]);
                    userContinue.push(user);
                }
            }

            await req.db.collection("users").update(
                { identification: user.id },
                {
                    $set: {
                        RUC: "",
                        state: false,
                        plan: false,
                        start: "",
                        end: "",
                    },
                }
            );
        });

        console.log(userContinue);

        const start = new Date();
        const end = new Date();
        end.setMonth(end.getMonth() + 1);

        for (let i = 9; i < data.length; i++) {
            const userExist = users.find(user => user.identification === data[i][1] + "");

            // const userExist = await req.db
            //     .collection("users")
            //     .findOne({ identification: data[i][1] + "" });

            let userToDepend;

            if (data[i][2]) {
                await q.add({
                    type: 'update',
                    id: { identification: data[i][2] + "" },
                    body: {
                        $addToSet: {
                            dependientes: {
                                name: data[i][0],
                                id: data[i][1],
                                state: true,
                            },
                        },
                    }

                })
                // userToDepend = await req.db
                //     .collection("users")
                //     .findOneAndUpdate(
                //         { identification: data[i][2] + "" },
                //         {
                //             $addToSet: {
                //                 dependientes: {
                //                     name: data[i][0],
                //                     id: data[i][1],
                //                     state: true,
                //                 },
                //             },
                //         }
                //     );
            }

            if (!userExist) {
                // const salt = await bcrypt.genSalt(10);
                // const hashedPasswordUser = await bcrypt.hash(
                //     data[i][1] + "",
                //     salt
                // );

                await q.add({
                    type: 'create',
                    body: {
                        RUC,
                        state: true,
                        start: start,
                        end: end,
                        name: data[i][0],
                        identification: data[i][1] + "",
                        birthdate: data[i][3],
                        adress: "",
                        phone: data[i][5] ? data[i][5] : '',
                        email: data[i][4] ? data[i][4] : '',
                        // password: hashedPasswordUser,
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
                        date: start,
                        dependeOf: data[i][2]
                            ? {
                                name: userToDepend.value.name,
                                id: data[i][2],
                            }
                            : "",
                        dependientes: [],
                    }
                })

                // await req.db.collection("users").insertOne({
                //     RUC,
                //     state: true,
                //     start: start,
                //     end: end,
                //     name: data[i][0],
                //     identification: data[i][1] + "",
                //     birthdate: data[i][3],
                //     adress: "",
                //     phone: data[i][5] ? data[i][5] : '',
                //     email: data[i][4] ? data[i][4] : '',
                //     password: hashedPasswordUser,
                //     know: 5,
                //     plan: true,
                //     service: false,
                //     terminos: true,
                //     historial: [],
                //     mustChangePass: true,
                //     alerts: {
                //         week: false,
                //         month: false,
                //     },
                //     date: start,
                //     dependeOf: data[i][2]
                //         ? {
                //             name: userToDepend.value.name,
                //             id: data[i][2],
                //         }
                //         : "",
                //     dependientes: [],
                // });

                if (data[i][2]) {
                    await q.add({
                        type: 'update',
                        id: { identification: data[i][2] + "" },
                        body: {
                            $addToSet: {
                                dependientes: {
                                    name: data[i][0],
                                    id: data[i][1],
                                    state: true,
                                },
                            },
                        }
                    })
                    // await req.db.collection("users").findOneAndUpdate(
                    //     { identification: data[i][2] + "" },
                    //     {
                    //         $addToSet: {
                    //             dependientes: {
                    //                 name: data[i][0],
                    //                 id: data[i][1],
                    //                 state: true,
                    //             }
                    //         },
                    //     }
                    // );
                }

                userContinue.push({
                    id: data[i][1] + "",
                    name: data[i][0],
                });
            } else {
                await q.add({
                    type: 'update',
                    id: { identification: data[i][1] + "" },
                    body: {
                        $set: {
                            RUC,
                            plan: true,
                            state: true,
                            start,
                            end,
                        },
                    }
                })
                // await req.db.collection("users").update(
                //     { identification: data[i][1] + "" },
                //     {
                //         $set: {
                //             RUC,
                //             plan: true,
                //             state: true,
                //             start,
                //             end,
                //         },
                //     }
                // );
            }
        }

        console.log(userContinue);



        const business = await req.db
            .collection("bussines")
            .findOneAndUpdate(
                { RUC },
                {
                    $set: {
                        start,
                        end,
                        identifications: userContinue,
                    },
                },
                {
                    returnOriginal: false,
                }
            );

        res.status(201).json({
            status: "ok",
            message: "Aseguradora actualizada satisfactoriamente",
            data: business.value,
            info: {
                num: userContinue.length,
                value: userContinue.length * cuotaAsegurado,
            },
        });

    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
