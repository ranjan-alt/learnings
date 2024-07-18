const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const bankData = [
  {
    id: 1,
    name: "PNB",
    branch: "chennai",
  },
  {
    id: 2,
    name: "SBI",
    branch: "noida",
  },
];

app.get("/getAllBanks", (req, res) => {
  res.status(200).json({ message: "success", data: bankData });
});

// get single bank

app.get("/getBank/:id", (req, res) => {
  const { id } = req.params;
  const singleBank = bankData.find((bank) => bank.id === parseInt(id));
  res.status(200).json({ message: "succcess", data: singleBank });
});

//post data
app.post("/addBank", (req, res) => {
  const { name, branch } = req.body;
  const postData = {
    id: bankData ? bankData[bankData.length - 1].id + 1 : 1,
    name,
    branch,
  };
  bankData.push(postData);
  res.status(200).json({ message: "success", postData: bankData });
});

app.delete("/deleteBank/:id", (req, res) => {
  const id = req.params;

  const deleteBank = bankData.splice(bankData.id !== parseInt(id));
  if (deleteBank !== 1) {
    res.status(200).json({ message: "deleted", deleteBank: deleteBank });
  } else {
    res.status(400).json({ message: "data not eixts" });
  }
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
