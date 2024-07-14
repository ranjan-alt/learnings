const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

let users = [];

app.get("/", (req, res) => {
  // res.json({ name: "ranjan", status: "successfull" });
  res.json({ data });
  //   res.send("hello world");
});

app.post("/:users", (req, res) => {
  const { id, name } = req.body;
  const modifiedData = {
    id: id,
    name: name.toUpperCase(),
    Date: Date.now().toLocaleString(),
  };
  const { post } = req.params;

  users.push(modifiedData);

  // res.send(
  //   `The id of candidate is ${id} and name is ${name} and url param is ${post}`
  // );
  res.status(200).json({ data: users, post: post });
});

//PUT METHOD
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;
  const updatedUser = [];
  users = users.map((user) => {
    if (user.id === userId) {
      user.name = name;
    }
    return user;
  });
  if (updatedUser) {
    res.json({ message: "User updated", users });
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
