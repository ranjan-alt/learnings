//createToken bnane k bad hm ae login k andar
const { createToken } = require("./createToken");
const login = (email, password) => {
  // iske andar hm isko convert krnge jwt me
  const token = createToken(email);
  return token;
};

module.exports = { login };
