const mongoose = require('./connection'); // We import the path of the connection file to the mongoDB.

// The Schema method creates a structure which will be used in the database. 
const TodoSchema = new mongoose.Schema({
    // Id is not specified because it is generated automatically.
    title: String,
    completed: Boolean
});

// The name of the schema 'Todo' will be the name of the database.
const collection = mongoose.model("Todo", TodoSchema); 

module.exports = collection; // Is export this module