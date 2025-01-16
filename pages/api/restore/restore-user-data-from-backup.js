// import bcrypt from "bcryptjs";
import withMiddleware from "../../../middlewares/withMiddleware";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const { userList } = req.body

		console.log("numero de usurarios total: ", userList.length)
		let count = 0

		try {
			
			userList.forEach(async user => {
                
                delete user._id
                
                const data = await req.db.collection('users').findOneAndUpdate({identification: user.identification}, {
                    $set: {
                        ...user,
                        start: new Date(user?.start?.$date ? user?.start?.$date : user.start),
                        end: new Date(user?.end?.$date ? user?.end?.$date : user.end),
                        date: new Date(user?.date?.$date ? user?.date?.$date : user.date),
                        mustChangePass: false,
                    }
                })
                
                if (data.ok === 1) {
                    count++
                    console.log(count)
                }
                    
			})
			
			console.log('finalizo el for')
			
		} catch (error) {
			console.log(error)
		}
		
		console.log('numero de usuarios actualizados: ', count)

		res.send({
			message: 'respuesta',
			count
		});
	} else {
		res.status(405).end();
	}
};

export default withMiddleware(handler);