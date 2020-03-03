import { ObjectId } from "mongodb"

const withAuthentication = handler => async (req, res) => {
    
    if (req.session.userId) {
        console.log(req.session.userId)
        const user = await req.db.collection('users').findOne(ObjectId(req.session.userId))
        console.log(user)
        if (user) {
            req.user = user
            return handler(req, res)
        }
    }
    return handler(req, res)

}

export default withAuthentication
