//Routing
const router = require("express").Router();
const Todo = require("../models/Todo");
//respond with the consult when GET request to find in JSON
router.get("/", (req, res) => {
    Todo.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});
//Create a object in JSON when listen POST request
router.post("/", async (req, res) => {
    try {
        const result = await Todo.create(req.body)
        res.json(result);
    } catch (error) {
        throw new Error(err)
        res.json({ error: true, message: 'ocurrio un error'});
    
}});
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