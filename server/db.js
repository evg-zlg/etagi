const Pool = require('pg').Pool;
const pool = new Pool({
  user: "postgres",
  password: "ssb5Iff1pNCNoDjvJeI8",
  host: "containers-us-west-87.railway.app",
  port: 6928,
  database: "railway"
});

module.exports = pool;