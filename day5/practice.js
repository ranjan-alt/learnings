const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const bankData = [
  {
    id: 1,
    name: "PNB",
    branch: "Chennai",
    details: {
      address: "123 ABC Street",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    accounts: [
      {
        accountNumber: "PNB-123456",
        type: "Savings",
        balance: 5000,
      },
      {
        accountNumber: "PNB-789012",
        type: "Checking",
        balance: 10000,
      },
    ],
    employees: [
      {
        id: 101,
        name: "John Doe",
        position: "Manager",
        department: "Operations",
      },
      {
        id: 102,
        name: "Jane Smith",
        position: "Assistant Manager",
        department: "Customer Service",
      },
    ],
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    name: "SBI",
    branch: "Noida",
    details: {
      address: "456 XYZ Road",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
    },
    accounts: [
      {
        accountNumber: "SBI-246810",
        type: "Savings",
        balance: 8000,
      },
      {
        accountNumber: "SBI-121416",
        type: "Checking",
        balance: 15000,
      },
    ],
    employees: [
      {
        id: 201,
        name: "Michael Johnson",
        position: "Branch Manager",
        department: "Administration",
      },
      {
        id: 202,
        name: "Emily Brown",
        position: "Customer Relations Officer",
        department: "Sales",
      },
    ],
    timestamp: new Date().toISOString(),
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

//search banks
app.get("/searchBanks", (req, res) => {
  const { name, branch } = req.body;
  let fitleredData = [...bankData]; // This approach is commonly used to avoid directly mutating the original array (bankData) when performing operations like filtering or modifying data.

  if (name) {
    fitleredData = fitleredData.filter((bank) =>
      bank.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  if (branch) {
    fitleredData = fitleredData.filter((banl) => {
      bank.branch.toLowerCase().includes(branch.toLowerCase());
    });
  }
  res.status(200).json({ message: "seached data", data: fitleredData });
});

//update bank
app.put("/updateBank/:id", (req, res) => {
  // this is shorthand of const id  = req.params.id
  const { id } = req.params;
  const { name, branch } = req.body;
  const updateBank = bankData.find((data) => data.id === parseInt(id));
  updateBank.name = name;
  updateBank.branch = branch;
  //  or

  const updatedBank = {
    ...bankData,
    name,
    branch,
  };

  bankData[updateBank] = updatedBank;
  res.status(200).json({ message: "updated", data: updatedBank });
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
