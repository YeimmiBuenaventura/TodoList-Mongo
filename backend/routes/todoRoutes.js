const router = require("express").Router();
const Todo = require("../models/Todo");

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

router.post("/new", async (req, res) => {
    try {
        const result = await Todo.create(req.body)
        res.json(result);
    } catch (error) {
        res.json({ error: true, message: 'ocurrio un error'})
        throw new Error(err)
    }
});

router.put("/:id", (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.post("/new", (req, res) => {
    Todo.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.put("/:id", (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
    });
});

router.delete("/:id", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if (err) throw new Error(err);
        res.end();
    });
});

module.exports = router;