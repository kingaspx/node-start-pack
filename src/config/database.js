const Pool = require('pg').Pool

const pool = new Pool({
    user: 'username',
    host: 'hostname',
    database: 'database' ,
    password: 'password',
    port: 1234,
})

module.exports = pool;