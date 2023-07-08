const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req,res)=>{
    const toDo = await ToDoModel.find();
    res.send(toDo);
}

module.exports.saveToDo = async (req,res)=>{
    const { text } = req.body;
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Added Succesfully...");
        console.log(data);
        res.send(data);
    })
}

module.exports.updateToDo = async (req,res)=> {
    const {_id, text } = req.body;
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Successfully..."))
    .catch((err)=>{
        console.log(err);
    })
}

module.exports.deleteToDo = async (req, res) => {
    const { id } = req.params; // Extract the ToDo item ID from the URL parameter
    try {
      await ToDoModel.findByIdAndDelete(id);
      res.send("Deleted Successfully...");
    } catch (err) {
      console.log(err);
      res.status(500).send("An error occurred while deleting the ToDo item.");
    }
  };