const { USER_TABLE } = require("../constants/tables");
const { user_table } = require("../constants/user_table");
const { v4: uuidv4 } = require("uuid");
const { db } = require("../db");
const { getUserByEmail } = require("./getUserByEmail");
const registerFunction = async (email, password, name) => {
  try {
    console.log(email, password, name);
    const user = await getUserByEmail(email);
    console.log(user, "RANJAN");
    if (user?.[user_table?.USERID]) {
      // user.user_id

      throw Error("user already exist with this email");
      return null;
    }

    const uuid = uuidv4();
    const insertQuery = `INSERT INTO ${USER_TABLE}  (${user_table?.USERID}, ${user_table.EMAIL}, ${user_table.PASSWORD}, ${user_table.NAME}) values ($1,$2,$3,$4)
         returning *`;
    const newUser = await db.query(insertQuery, [uuid, email, password, name]);
    return newUser?.rows?.[0];
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = { registerFunction };
