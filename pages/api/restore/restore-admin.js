// import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import withMiddleware from "../../../middlewares/withMiddleware";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const { adminList } = req.body

		// console.log("numero de usurarios total: ", userList.length)

		try {
			
			adminList.forEach(async admin => {
                await req.db.collection('admin').insertOne({
                    ...admin,
                    _id: ObjectId(admin._id.$oid),
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