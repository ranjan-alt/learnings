const { createToken } = require("./createToken");

const login = (email) => {
  const token = createToken(email);
  return token;
};

module.exports = { login };
