const Pool = require("pg").Pool;
require("dotenv").config()

const pool = new Pool({
    host: process.env.dbServer,
    port: process.env.dbPort,
    database: process.env.dbDatabase,
    user: process.env.dbUser,
    password: process.env.dbPassword
});

module.exports = pool;