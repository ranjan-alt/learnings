const { login } = require("../functions/loginFunctions");

const authController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password) {
      res.send("please provide the password");
    }
    if (!email) {
      res.send("please provide the email");
    }
    const token = await login(email);
    res.status(200).json({ message: "success", token: token });
  } catch (err) {
    res.send({ message: err.message });
  }
};

module.exports = { authController };
