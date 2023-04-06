// for local deploy paste this body to db.js

const Pool = require('pg').Pool;
const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "etagi_postgres"
});

module.exports = pool;
