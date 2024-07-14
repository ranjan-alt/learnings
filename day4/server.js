const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const collegeList = [
  {
    id: 1,
    name: "Bit Mersra",
    state: "UP",
    university: "Deemed",
  },
  {
    id: 2,
    name: "IIT Delhi",
    state: "Delhi",
    university: "IIT",
  },
  {
    id: 3,
    name: "Graphic Era",
    state: "Uttrakhand",
    university: "graphic",
  },
  {
    id: 4,
    name: "IIM Indore",
    state: "MP",
    university: "Indore University",
  },
];
//get all colleges
app.get("/getColleges", (req, res) => {
  //   res.json({ college: "Bit Mesra" });
  //we are asking for list or
  // we are asking item
  res.status(200).json({ code: 200, colleges: collegeList });
});

// get single college

app.get("/getCollege", (req, res) => {
  // const collegeId = req.params
  // if(id === collegeId){
  //     res.status(200).json()
  // }
  const college = collegeList[2];
  res.status(200).json({ college });
});

// get collge by id
app.get("/getCollege/:id", (req, res) => {
  const { id } = req.params;
  //   const getCollegeById = collegeList.find((college) => {
  //     college.id === parseInt(id);
  //     return;
  //   });

  //   question what issue lies here and

  const getCollegeById = collegeList.find(
    (college) => college.id === parseInt(id) /// why are we using parseint here ?
  );

  if (getCollegeById) {
    res.status(200).json(getCollegeById);
  } else {
    res.status(400).json({ message: "college not found" });
  }
});

// post
app.post("/addCollege", (req, res) => {
  const id = collegeList[3].id + 1;
  const { name, state, university } = req.body;
  const addCollege = { name, state, university, id };
  //   collegeList.push(addCollege);
  res.status(200).json({ addCollege });
});

// put (update college by id)

// delete college by id

app.listen(8000, () => {
  console.log("server is listing on port 8000");
});
