const { login } = require("../funtions/loginFunction");

const authController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("email not found");
    }
    if (!password) {
      throw new Error("password not found");
    }
    const token = await login(email, password);
    res.status(200).json({ message: "success", token });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = { authController };
