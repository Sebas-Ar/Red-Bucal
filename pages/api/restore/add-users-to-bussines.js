// import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import withMiddleware from "../../../middlewares/withMiddleware";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const { usersList, bussinesID } = req.body


		try {
			
			usersList.forEach(async user => {
                await req.db.collection('bussines').findOneAndUpdate({
					_id: ObjectId(bussinesID)
                },
            {
                $push: {
                    identifications: {
                        id: user.id,
                        name: user.name,
                    }
                }
            })

            })
			
			console.log('finalizo el for')
			
		} catch (error) {
			console.log(error)
		}
		

		res.send({
			message: 'respuesta'
		});
	} else {
		res.status(405).end();
	}
};

export default withMiddleware(handler);