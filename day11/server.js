const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT;

const authRoute = require("./routes/auth");
const { middleware } = require("./middleware");
const userDetails = require("./routes/userRoutes");
const { middlewareOne } = require("./middleware/middleware1");

app.use("/auth", authRoute);
app.use("/user", middleware, middlewareOne, userDetails);
app.listen(port, (req, res) => {
  console.log(`server is listing on port ${port}`);
});
