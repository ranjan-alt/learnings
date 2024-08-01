const { verifyToken } = require("../functions/verifyToken");

const middleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")?.[1];
    console.log(token);
    const verifiedTokenObj = verifyToken(token);
    if (!verifiedTokenObj.email) {
      throw Error("token not verified");
    }

    next();
    res.status(200).json({ code: 200, data: verifiedTokenObj });
  } catch (err) {
    res.status(400).json({ error: err.code, message: err.message });
  }
};

module.exports = { middleware };
