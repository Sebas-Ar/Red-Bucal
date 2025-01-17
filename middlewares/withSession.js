import connectMongo from 'connect-mongo'
import dotenv from 'dotenv'
import session from 'next-session'
dotenv.config()

const { MONGODB_URI } = process.env

const MongoStore = connectMongo(session)

const withSession = handler => session.withSession(handler, {
    store: new MongoStore({
        url: MONGODB_URI
    })
})

export default withSession
