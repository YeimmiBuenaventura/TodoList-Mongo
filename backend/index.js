const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://todo:1234@todo.alqk27v.mongodb.net/test', connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.send('Online')
})

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});

console.log("hola");