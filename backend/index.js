/*
Mongoose is a library that helps to facilitate and structure the work with MongoDB, 
it provides a high-level interface to create, query, update and delete documents in 
the database, as well as to create and manage schemas and relationships between documents.
*/
const mongoose = require("./connection"); // We import the path of the connection file to the mongoDB.

/*
Express is one of the most popular web frameworks for Node.js, and is widely used in building web applications and web services.
With Express, you can create routes and request handlers to handle HTTP requests.
*/
const express = require("express"); // The express module is imported with the require keyword for its use.

/*
CORS (Cross-Origin Resource Sharing) is a security mechanism used to restrict access to resources of a different origin in a web application.
*/
const cors = require("cors");

const PORT = process.env.PORT || 3030; // The port where the database connection will run is declared.
const app = express();

const todoRoutes = require("./routes/todoRoutes"); // The methods that will be used in the app are imported.

app.use(express.json());// Use the librery and converts it to json.
app.use(cors());// Use the security mechanism for the app.
app.use("/", todoRoutes); // In this route, the added lists will be displayed from the front, it is possible to observe in postamn or in the browser after localhost:3030/todos
mongoose; // I call database connection

// This method helps us to check if it is running correctly on the declared port and this can be tested in postman
app.get('/', (req, res) => {
    res.send('Online') // 
})

// This method listens for the request and prints a message to warn which port the backend will be running on.
app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});
