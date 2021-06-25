import withMiddleware from "../../middlewares/withMiddleware";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const { userList } = req.body

		await req.db
			.collection("users")
			.insertMany(userList);

		res.send({
			message: 'respuestad',
		});
	} else {
		res.status(405).end();
	}
};

export default withMiddleware(handler);