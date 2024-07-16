const express = require("express");
const bodyParser = require("body-parser");
const { get } = require("http");

const app = express();
app.use(bodyParser.json());

// CRUD OPERATIONS

const banklist = [
  {
    id: 12,
    name: "SBI",
    branch: "noida",
  },
  {
    id: 13,
    name: "PNB",
    branch: "delhi",
  },
];

// getBankList
app.get("/getBanks", (req, res) => {
  res.status(200).json({ message: "successful", data: banklist });
});

// getSingleBank
app.get("/getBank/:id", (req, res) => {
  const { id } = req.params;
  console.log(typeof id);
  const getBank = banklist.find((bank) => bank.id === parseInt(id)); //kya pta hum url se string bhej rae hain to usko parseInt pakkad lega

  res
    .status(200)
    .json({ message: "single bank fetched", singleBankData: getBank });
});

app.post("/addBank", (req, res) => {
  const { id } = req.body;
  const { name, branch } = req.body;

  const postData = {
    id: banklist[banklist.length - 1].id + 1, //// isko ragad dena hai
    name,
    branch,
  };
  banklist.push(postData);
  res.status(200).json({ message: "data saved", postData: banklist });
});

app.put("/updateBank/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const bankData = banklist.find((bank) => bank.id === parseInt(id));
  bankData.name = name; /// ham object ka name assign kar rae hai

  res
    .status(200)
    .json({ message: "updated succesfully", updateBank: bankData });
});

/// homework

// deleteBankById
// multipleParams /id/name/ or query string ?id=12

// javascript
// object se name extract krna
// object ka name change krna
// object ko nikalne k bad uska name and id update krna
//array se object ka andar kaise jana hai

app.listen(8000, () => {
  console.log("server is listing on port 8000");
});
