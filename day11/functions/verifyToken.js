const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const verifyToken = (token) => {
  const verifiedToken = jwt.verify(token, secret);
  return verifiedToken;
};

module.exports = { verifyToken };
