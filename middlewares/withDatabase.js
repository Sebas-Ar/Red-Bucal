import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config()

const { RED_BUCAL_MONGODB_HOTS, RED_BUCAL_MONGODB_DATABASE } = process.env
//const MONGODB_URI = `mongodb://${RED_BUCAL_MONGODB_HOTS}/${RED_BUCAL_MONGODB_DATABASE}`
const MONGODB_URI = `mongodb+srv://juanariasd:eiJipA7hq5q7wx08@clusterredbucal.mzldt.mongodb.net/?retryWrites=true&w=majority&appName=ClusterRedBucal`

const client = new MongoClient(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const withDatabase = handler => (req, res) => {
    try {
        if(!client.isConnected()) {
            return client.connect().then(() => {
                req.db = client.db('red-bucal-database')
                return handler(req, res)
            })
        }
        req.db = client.db('red-bucal-database')
        return handler(req, res)
    } catch (error) {
        console.error(error)
    }
}

export default withDatabase