const { getUserById } = require("../functions/getUserById");
const { registerFunction } = require("../functions/registerFunction");
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

const registerUser = async (req, res) => {
  const { email, password, name } = req.body;
  // try {
  if (!email) {
    throw Error("Email not found");
  }
  if (!password) {
    throw Error("password not found");
  }
  if (!name) {
    throw Error("name not found");
  }
  const user = await registerFunction(email, password, name);
  res.status(200).json({ message: "success", data: user });
  // } catch (err) {
  //   res.json({ message: err.message });
  // }
};

module.exports = { userController, registerUser };
