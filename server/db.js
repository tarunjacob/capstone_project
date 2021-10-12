const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "database-1.cvip4xpkynfs.us-east-2.rds.amazonaws.com",
    database: "apna_dukan",
    password: "postgres",
    port: 5432
});
exports.secret = {
    "SECRET": "r7Bg9R4IDPip5akZdOyD"
}

module.exports = pool;