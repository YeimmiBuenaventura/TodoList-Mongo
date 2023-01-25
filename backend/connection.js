// Configuring connection to mongoDB using mongoose

/* 
The mongoose module is imported with the require keyword. This helps us to have access 
to the mongoose methods necessary for the creation of the database.
*/
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

mongoose.connect(process.env.URI_MONGO, options)
  .then( () => console.log("Connected successfully")) // If the connection is successful, print the message on the console.
  .catch((err) => console.error(err)); // Bind the error trace to the console and display it


module.exports = mongoose; // The module is exported to be able to access it externally