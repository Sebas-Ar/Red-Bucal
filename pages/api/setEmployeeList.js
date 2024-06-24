import validator from "email-validator";
import withMiddleware from "../../middlewares/withMiddleware";
import bcrypt from "bcryptjs";

const saveLimit = 1000

const handler = async (req, res) => {
    const _start = performance.now();
    if (req.method === "POST") {
        const { data, RUC } = req.body;

        const entity = await req.db.collection("bussines").findOne({ RUC });
        const users = await req.db.collection('users').find().toArray();

        /**@type {Array<{updateOne: {upsert: true, filter: Record<string, any>, update: Record<string, any>}}>} */
        const usersBulkWrite = []
        const arrPromises = []
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
            //console.log('first loop: ', i, 'bulkWrite length: ', usersBulkWrite.length)
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
        } else {
            res.status(201).json({
                status: "ok",
                message: "Aseguradora actualizada satisfactoriamente",
                data: null,
                info: {},
            });
        }

        let userContinue = [];

        for (let index = 0; index < entity.identifications.length; index++) {
            const user = entity.identifications[index];

            //console.log('second loop: ', index, 'bulkWrite length: ', usersBulkWrite.length);

            for (let i = 9; i < data.length; i++) {
                if (user.id === data[i][1] + "") {
                    console.log(user.id, data[i][1]);
                    userContinue.push(user);
                }
            }

            usersBulkWrite.push({
                updateOne: {
                    upsert: true,
                    filter: { identification: user.id },
                    update: {
                        $set: {
                            RUC: "",
                            state: false,
                            plan: false,
                            start: "",
                            end: "",
                        },
                    },
                },
            })

            if (usersBulkWrite.length === saveLimit) {
                await req.db.collection("users").bulkWrite(usersBulkWrite);
                usersBulkWrite.length = 0;
            }
        }

        // await Promise.allSettled(entity.identifications.map(async (user) => {
        //     for (let i = 9; i < data.length; i++) {
        //         if (user.id === data[i][1] + "") {
        //             console.log(user.id, data[i][1]);
        //             userContinue.push(user);
        //         }
        //     }

        //     usersBulkWrite.push({
        //         updateOne: {
        //             upsert: true,
        //             filter: { identification: user.id },
        //             update: {
        //                 $set: {
        //                     RUC: "",
        //                     state: false,
        //                     plan: false,
        //                     start: "",
        //                     end: "",
        //                 },
        //             },
        //         },
        //     })

        //     if ( i % 1000 === 0 ) {
        //         await req.db.collection("users").bulkWrite(usersBulkWrite);
        //         usersBulkWrite.length = 0;
        //     }
        //     // await req.db.collection("users").update(
        //     //     { identification: user.id },
        //     //     {
        //     //         $set: {
        //     //             RUC: "",
        //     //             state: false,
        //     //             plan: false,
        //     //             start: "",
        //     //             end: "",
        //     //         },
        //     //     }
        //     // );
        // }));

        console.log(userContinue);

        const start = new Date();
        const end = new Date();
        end.setMonth(end.getMonth() + 1);

        for (let i = 9; i < data.length; i++) {
            console.log('third loop: ', i, 'bulkWrite length: ', usersBulkWrite.length);
            const userExist = users.find(user => user.identification === data[i][1] + "");
            // const userExist = await req.db
            //     .collection("users")
            //     .findOne({ identification: data[i][1] + "" });

            // if ( usersBulkWrite.length === saveLimit ) {
            //     await req.db.collection("users").bulkWrite(usersBulkWrite);
            //     usersBulkWrite.length = 0;
            // }

            let userToDepend;

            if (data[i][2]) {
                userToDepend = {
                    name: data[i][0],
                    id: data[i][1],
                    state: true,
                }

                usersBulkWrite.push({
                    updateOne: {
                        upsert: true,
                        filter: { identification: data[i][2] + "" },
                        update: {
                            $addToSet: {
                                dependientes: userToDepend,
                            },
                        },
                    },
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
                // const hashedPasswordUser = "" ?? await bcrypt.hash(
                //     data[i][1] + "",
                //     salt
                // );
                const user = {
                    updateOne: {
                        upsert: true,
                        filter: { identification: data[i][1] + "" },
                        update: {
                            $set: {
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
                                        name: userToDepend?.name,
                                        id: data[i][2],
                                    }
                                    : "",
                                dependientes: [],
                            }
                        }
                    }
                }
                usersBulkWrite.push(user)

                // arrPromises.push(trackPromise(promise))

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
                //             name: userToDepend.value?.name,
                //             id: data[i][2],
                //         }
                //         : "",
                //     dependientes: [],
                // });

                if (data[i][2]) {
                    usersBulkWrite.push({
                        updateOne: {
                            upsert: true,
                            filter: { identification: data[i][2] + "" },
                            update: {
                                $addToSet: {
                                    dependientes: {
                                        name: data[i][0],
                                        id: data[i][1],
                                        state: true,
                                    }
                                },
                            },
                        },
                    })

                    // if ( usersBulkWrite.length === saveLimit ) {
                    //     await req.db.collection("users").bulkWrite(usersBulkWrite);
                    //     usersBulkWrite.length = 0;
                    // }

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
                usersBulkWrite.push({
                    updateOne: {
                        upsert: true,
                        filter: { identification: data[i][1] + "" },
                        update: {
                            $set: {
                                RUC,
                                plan: true,
                                state: true,
                                start,
                                end,
                            },
                        },
                    },
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

        // // await Promise.allSettled(arrPromises)
        // let index = 0
        // let counter = arrPromises.length
        // while (true) {
        //     console.log('fourth loop: ', index, 'pending: ', counter);
        //     index++
        //     if (index > counter) { index = 0 }
        //     if (arrPromises[index].status() === 'fulfilled') {
        //         console.log('fourth loop: ', index, 'fulfilled: ', counter);
        //         counter --
        //     }
        //     if (counter === 0) { break }
        // }
        // for (let index = arrPromises.length; index > 0; index--) {
        //     console.log('fourth loop: ', index, 'bulkWrite length: ', usersBulkWrite.length);
        //     const fn = arrPromises[index];
        //     await fn;
        // }
        await req.db.collection("users").bulkWrite(usersBulkWrite);
        usersBulkWrite.length = 0;
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

        // res.status(201).json({
        //     status: "ok",
        //     message: "Aseguradora actualizada satisfactoriamente",
        //     data: business.value,
        //     info: {
        //         num: userContinue.length,
        //         value: userContinue.length * cuotaAsegurado,
        //     },
        // });

        const _end = performance.now();
        const totalTime = ((_end - _start) / 1_000).toFixed(0);
        //console.log('Execution time: ', totalTime, ' seconds');
    
        if (totalTime > 300) await sendReport([
            Execution time: ${totalTime} seconds,
            Rows processed: ${data.length - 9},
        ]);
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);


const sendReport = async (message) => {

    const axios = require('axios');
    let data = JSON.stringify({
        "message": message
    });

    let config = {
        method: 'post',
        url: 'https://report-error-whats-app-production.up.railway.app/api',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 592955b3-4fb4-5e69-918f-30eac826e62a',
            'Content-Type': 'application/json'
        },
        maxRedirects: 0,
        data: data
    };

    await axios.request(config)
}