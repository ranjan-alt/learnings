const express = require("express");
require("dotenv").config({ path: "./.env" });
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const authRoute = require("./routes/auth");

app.use("/auth", authRoute);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
