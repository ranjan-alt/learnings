const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const data = [];

//get method
app.get("/", (req, res) => {
  res.json({ id: 1 });
});

app.get("/profile", (req, res) => {
  res.json({ "profile-name": "ranjan", "profile-image": "url" });
});

app.post("/addpost", (req, res) => {
  const { post, title, content } = req.body;
  const blogData = { post, title, content };
  const modifiedData = {
    post: post.toUpperCase(),
    title: title.toUpperCase(),
    content: content.toUpperCase(),
    date: Date.now().toLocaleTimeString(),
  };

  data.push(modifiedData);
  const date = Date.now().toString().substring(2, 9);
  res.status(200).json({ message: "success", data: data, date });
});

app.listen(8001, () => {
  console.log("server is running on port 8001");
});
