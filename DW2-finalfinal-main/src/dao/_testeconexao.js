const pool = require('./conexao');

async function connect(){
    await pool.connect()
    console.log('Conectou ao banco')
    await pool.end()
}

connect()