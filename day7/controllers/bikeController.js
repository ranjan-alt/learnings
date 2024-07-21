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

const getBikeController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(typeof id);
    const getBank = await banklist.find((bank) => bank.id === parseInt(id)); //kya pta hum url se string bhej rae hain to usko parseInt pakkad lega

    res
      .status(200)
      .json({ message: "single bank fetched", singleBankData: getBank });
  } catch (err) {
    console.log(err);
    res.status(200).json({ messageee: err.message });
  }
};

const addBikeController = async (req, res) => {
  try {
    const { name, modelNumber } = req.body;

    res
      .status(200)
      .json({ message: "bikes added", data: { name, modelNumber } });
  } catch (err) {
    res.status(400).json({ message: err.message, code: err.code });
  }
};

module.exports = { getBikeController, addBikeController };
