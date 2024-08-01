const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv").config({ path: "./.env" });

const authRoute = require("./routes/auth");
const profileDeatils = require("./routes/profileDetail");
const { middleware } = require("./middleware");

app.use("/auth", authRoute);
app.use("/profile", middleware, profileDeatils);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });
const port = process.env.PORT;
app.listen(8000, () => {
  console.log(`server is running on port ${port}`);
});
