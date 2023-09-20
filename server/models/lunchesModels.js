//require PostgreSQL module so we can interact with ElephantSQL
const { Pool } = require ('pg')

//connection string
const PG_URI = 'postgres://ckfigvun:6bwBBcT7N0s4KaYfRi3xqJG2THjETSoD@berry.db.elephantsql.com/ckfigvun'

//create a new pool
const pool = new Pool({
    connectionString: PG_URI
  });

//exporting object with query function that logs the text of the SQL query and returns everything
module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
  };