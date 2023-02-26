import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URL);
client.connect();
console.log('Connected successfully to server');
export default client.db(process.env.DB_NAME);
