const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const createToken = (email) => {
  return jwt.sign({ email }, secret, { expiresIn: 60 * 60 * 60 });
};

module.exports = { createToken };
