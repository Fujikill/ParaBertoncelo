const { Pool } = require('pg');

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'ifms-dw2',
    password: 'postgres',
    port: 5432
})

module.exports = pool;