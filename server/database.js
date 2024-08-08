require('dotenv').config();

// /////////////////////////////////////////////////
// // Perform operations with the client          //
// // Example: List all databases                 //
// // await client.db().admin().listDatabases();  //
// /////////////////////////////////////////////////

// Library import
const { MongoClient } = require('mongodb');

// Database url
const uri = `mongodb+srv://Cluster00943:${process.env.PASSWORD}@cluster00943.clxi25k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster00943`;

// Create a new MongoClient
const client = new MongoClient(uri);

// 
const run = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
    }
};

run().catch(console.error);

const database = client.db('e-commerce');
const usersCollection = database.collection('users');

module.exports = usersCollection;