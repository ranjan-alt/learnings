const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const verifyToken = (token) => {
  const verifiedToken = jwt.verify(token, secret); //return krta hai object
  console.log(verifiedToken);
  return verifiedToken;
};

module.exports = { verifyToken };
