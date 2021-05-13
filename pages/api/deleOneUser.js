import withMiddleware from "../../middlewares/withMiddleware";

const handler = async (req, res) => {
    if (req.method === "DELETE") {
        try {
            const { identification } = req.query;
            console.log(identification);

            const user = await req.db
                .collection("users")
                .findOne({ identification });

            console.log(user);

            if (user.plan == true) {
                if (user.RUC == "") {
                    await req.db
                        .collection("users")
                        .deleteOne({ identification });

                    res.send({
                        status: "ok",
                        message: `Usuario eliminado `,
                    });
                } else {
                    const empresa = await req.db
                        .collection("bussines")
                        .findOne({ RUC: user.RUC });

                    res.send({
                        status: "ok",
                        message: `El usuario no puede ser eliminado, Está afiliado a una empresa o aseguradora llamada ${empresa.name}`,
                    });
                }
            } else {
                if (user.dependientes && user.dependientes.length) {
                    res.send({
                        status: "ok",
                        message:
                            "El usuario no puede ser eliminado, ya que cuenta con usuarios depedendientes, por favor elimine los dependientes para poder eliminar el principal",
                    });
                } else if (user.dependeOf) {
                    const userDepend = await req.db
                        .collection("users")
                        .findOne({ identification: user.dependeOf + "" });

                    await req.db.collection("users").updateOne(
                        { identification: user.dependeOf + "" },
                        {
                            $set: {
                                dependientes: userDepend.dependientes.filter(
                                    (ident) => ident !== identification
                                ),
                            },
                        }
                    );

                    await req.db
                        .collection("users")
                        .deleteOne({ identification });

                    res.send({
                        status: "ok",
                        message: `el usuario que dependia de ${userDepend.name} fué eliminado`,
                    });
                } else {
                    await req.db
                        .collection("users")
                        .deleteOne({ identification });

                    res.send({
                        status: "ok",
                        message: `el usuario ${user.name} ha sido eliminado`,
                    });
                }
            }
        } catch (error) {
            res.send({
                status: "error",
                message: "error al eliminar el usuario",
            });
        }
    } else {
        res.status(405).end();
    }
};

export default withMiddleware(handler);
