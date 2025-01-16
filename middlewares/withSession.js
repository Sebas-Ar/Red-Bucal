import connectMongo from "connect-mongo";
import dotenv from "dotenv";
import session from "next-session";
dotenv.config()

const { RED_BUCAL_MONGODB_HOTS, RED_BUCAL_MONGODB_DATABASE } = process.env
const MONGODB_URI = `mongodb+srv://juanariasd:eiJipA7hq5q7wx08@clusterredbucal.mzldt.mongodb.net/?retryWrites=true&w=majority&appName=ClusterRedBucal`
//const MONGODB_URI = `mongodb://${RED_BUCAL_MONGODB_HOTS}/${RED_BUCAL_MONGODB_DATABASE}`

const MongoStore = connectMongo(session)

const withSession = handler => session.withSession(handler, {
    store: new MongoStore({
        url: MONGODB_URI
    })
})

export default withSession