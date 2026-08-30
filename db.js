const pg=require('pg');
require('dotenv').config();
const {Pool}=pg;
const pool =new Pool(
{
user:process.env.DB_USER,
host:process.env.HOST,
password:process.env.PASSWORD,
database:process.env.DATABASE,
port:process.env.PORT
}
)
module.exports=pool;