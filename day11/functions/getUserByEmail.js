// select * from user where email ==

const { USER_TABLE } = require("../constants/tables");
const { user_table } = require("../constants/user_table");
const { db } = require("../db");

const getUserByEmail = async (email) => {
  const getUser = `select * from ${USER_TABLE} where ${user_table.EMAIL}=  $1 limit 1`; // this $1 is pointing to email mind you
  const user = await db.query(getUser, [email]);
  console.log(user.rows);
  return user?.rows?.[0]; /////here sero means frist element of the array
};

module.exports = { getUserByEmail };
