const { login } = require("../functions/loginFunctions");

const authController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.send("please provide the email");
    }
    if (!password) {
      res.send("please provide the password");
    }
    const token = await login(email);
    res.status(200).json({ message: "success", token });
  } catch (err) {
    res.send({ message: err });
  }
};

module.exports = { authController };
