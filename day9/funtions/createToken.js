const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;
// ab hmko krna hai sign
const createToken = (email) => {
  return jwt.sign({ email }, secret, { expiresIn: 60 * 60 * 60 });
};

module.exports = { createToken };
