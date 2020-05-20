const Pool =  require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"aditya",
    host:"localhost",
    port: 5432,
    database:"timeEntryApplication"
});

module.exports = pool;