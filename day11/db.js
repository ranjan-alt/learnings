const { Client } = require("pg");
const db = new Client({
  host: "localhost",
  user: "ranjankumar",
  post: 5432,
  password: "admin",
  database: "ranjandb",
});

module.exports = { db };
