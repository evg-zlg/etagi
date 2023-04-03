const Pool = require('pg').Pool;
const pool = new Poll(({
  user: "postgress",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "",
}));

module.exports = pool;