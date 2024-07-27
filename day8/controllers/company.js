const { getCompanyData } = require("../functions/getCompanyData");

const companyController = async (req, res) => {
  const { id } = req.params;
  try {
    const convertToNumber = parseInt(id);
    console.log(typeof convertToNumber);
    if (typeof convertToNumber !== "number") {
      throw Error("id must be a number");
    }
    console.log("conosle 1");
    const companyData = await getCompanyData(id);
    console.log("console 2");
    res.status(200).json({ message: "success", data: companyData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { companyController };
