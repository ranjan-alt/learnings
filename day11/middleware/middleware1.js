const { verifyToken } = require("../functions/verifyToken");

// wai req res hoga isme jo poorane wale middleware me the next() ki wajha se
const middlewareOne = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")?.[1];
    console.log("ranajn");
    const verifiedToken = verifyToken(token);
    // console.log(verifiedToken);
    req.email = verifiedToken.email;
    console.log(req.email);
    next();
  } catch (err) {
    res.send({ message: err.message });
  }
};

module.exports = { middlewareOne };
