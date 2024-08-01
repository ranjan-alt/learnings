const { verifyToken } = require("../functions/verifyToken");

const middleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")?.[1];
    const verifiedTokenObj = verifyToken(token);
    if (!verifiedTokenObj.email) {
      throw Error("token not verifoed");
    }

    next();
    // res.status(200).json({ message: "success", data: verifiedTokenObj });
  } catch (err) {
    res.send({ message: err.message });
  }
};

module.exports = { middleware };
