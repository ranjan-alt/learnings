const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config({ path: "./.env" });
const bikeRoute = require("./routes/bike");
//ab hmko is updar wale ko use krna hai
app.use(bodyParser.json());

app.use("/api/bike", bikeRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
