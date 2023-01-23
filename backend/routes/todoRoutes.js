//Routing
const router = require("express").Router();
const Todo = require("../models/Todo");
//respond with the consult when GET request to find in JSON
router.get("/", async (req, res) => {
    try {
        if (req.query?.title) {//Coloque el metodo find para que buscara el objeto titulo
            const seachTodo = await Todo.find({ 
                title: {
                    '$regex': req.query?.title
                }
            });
            res.json(seachTodo);
        }
        else{
            const result =  await Todo.find();
            res.json(result);
        }
    } catch (error) {
        res.json({ error: true, message: 'ocurrio un error'})
        throw new Error(error);
    }
});

//Create a object in JSON when listen POST request
router.post("/", async (req, res) => {
    try {
        const result = await Todo.create(req.body)
        res.json(result);
    } catch (error) {
        res.json({ error: true, message: 'ocurrio un error'})
        throw new Error(err)
    }
});
//Find and update de specific object in the JSON when listen PUT request
router.put("/:id", (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});
//Find and remoce specific object in the JSON when listen DELETE request
router.delete("/:id", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if(err) throw new Error(err);
        res.end();
    });
});

module.exports = router;
/* console.log("hola"); */