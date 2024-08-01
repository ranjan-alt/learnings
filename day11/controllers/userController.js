const { getUserById } = require("../functions/getUserById");
const { middlewareOne } = require("../middleware/middleware1");

const userController = (req, res) => {
  try {
    const { id } = req.params;
    const convertToInteger = parseInt(id);
    const user = getUserById(convertToInteger);
    const emailFromToken = req.email;
    console.log(emailFromToken);
    const addEmailData = { ...user, emailFromToken };
    res.status(200).json({ message: "success", addEmailData });
  } catch (err) {
    res.send({ message: err.message });
  }
};

module.exports = { userController };
