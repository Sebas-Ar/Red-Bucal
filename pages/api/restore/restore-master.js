// import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import withMiddleware from "../../../middlewares/withMiddleware";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const { masterList } = req.body

		// console.log("numero de usurarios total: ", userList.length)

		try {
			
			masterList.forEach(async master => {
                await req.db.collection('master').insertOne({
                    ...master,
                    _id: ObjectId(master._id.$oid),
                })

            })
			
			console.log('finalizo el for')
			
		} catch (error) {
			console.log(error)
		}
		
		console.log('admins restaurados')

		res.send({
			message: 'respuesta'
		});
	} else {
		res.status(405).end();
	}
};

export default withMiddleware(handler);