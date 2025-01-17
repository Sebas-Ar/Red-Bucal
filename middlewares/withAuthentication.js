import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../backend/db'

const withAuthentication = handler => async (req, res) => {
    const mongoClient = await connectToDatabase()

    if (req.session.businessId) {
        console.log(req.session.businessId, 'texto')
        const business = await mongoClient.db.collection('bussines').findOne(new ObjectId(req.session.businessId))
        console.log(business)
        if (business) {
            req.business = business
            return handler(req, res)
        }
    } else {
        if (req.session.userId) {
            console.log(req.session.userId)
            const user = await mongoClient.db.collection('users').findOne(new ObjectId(req.session.userId))
            console.log(user)
            if (user) {
                req.user = user
                return handler(req, res)
            }
        } else {
            if (req.session.adminId) {
                console.log(req.session.adminId)
                const admin = await mongoClient.db.collection('admin').findOne(new ObjectId(req.session.adminId))
                console.log(admin)
                if (admin) {
                    req.admin = admin
                    return handler(req, res)
                }
            } else {
                if (req.session.masterId) {
                    console.log(req.session.masterId)
                    const master = await mongoClient.db.collection('master').findOne(new ObjectId(req.session.masterId))
                    console.log(master)
                    if (master) {
                        req.master = master
                        return handler(req, res)
                    }
                }
            }
        }
    }

    return handler(req, res)
}

export default withAuthentication
