const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

class Todo {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    // this.completed = false;
  }
}
let todos = [];

app.post("/todos", (req, res) => {
  const id = req.body;
  const title = req.body;
  const description = req.body;

  const newTodo = new Todo(id, title, description);
  todos.push(newTodo);
  res.status(200).json({
    message: "success",
    newTodo,
  });
});
// get all todos
app.get("/", (req, res) => {
  res.json(todos);
});

// get single todo

app.get("/:id", (req, res) => {
  const todoId = req.params.id;
  const todo = todos.find((todo) => todo.id === todoId);
  res.json(todo);
});

app.listen(3000, () => {
  console.log("server is up and running on port 3000");
});
