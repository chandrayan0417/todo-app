const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://chandrayan0417:a0pvr3AXY8FUnWGK@chansrayan0417mdb.adbvx54.mongodb.net/todo-app"
);

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model("todos", todoSchema);

module.exports = {
  Todo,
};
