// import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import withMiddleware from "../../../middlewares/withMiddleware";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const { bussinesList } = req.body


		try {
			
			bussinesList.forEach(async bussines => {
                await req.db.collection('bussines').insertOne({
                    ...bussines,
					_id: ObjectId(bussines._id.$oid),
					start: new Date(bussines.start.$date),
					end: new Date(bussines.end.$date),
					date: new Date(bussines.date.$date),
                })

            })
			
			console.log('finalizo el for')
			
		} catch (error) {
			console.log(error)
		}
		
		console.log('bussines restaurados')

		res.send({
			message: 'respuesta'
		});
	} else {
		res.status(405).end();
	}
};

export default withMiddleware(handler);