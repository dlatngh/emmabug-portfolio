import {MongoClient} from "mongodb";

const uri = process.env.MOGNGO_CONNECTION_STRING as string;
const options = {};
let client: MongoClient;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
}

const clientPromise = global._mongoClientPromise;

export default clientPromise;
