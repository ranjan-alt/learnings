const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
// Hmko ab apne application ko start krna hai

app.listen(8001, () => {
  console.log(`server is listing to port 8001`);
});
