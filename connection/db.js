// import postgres pool
const { Pool } = require("pg");

// setup connection pool
const dbPool = new Pool({
  database: "personal-web",
  port: 5432,
  user: "postgres",
  password: "Tuturu1*",
});

//export db pool
module.exports = dbPool;
