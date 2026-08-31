const db=require('../db');
const Register=async(name,phone)=>{
const query =await db.query('INSERT INTO users (name,phone)VALUES($1,$2) RETURNING *',[name,phone]);
return query.rows[0];
}
module.exports={
    Register
}