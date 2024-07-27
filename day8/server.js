const express = require("express");

const app = express();

const companyRoute = require("./routes/company");

app.use("/company", companyRoute);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
