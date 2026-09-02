const db=require('../db');
const Register=async(name,phone)=>{
const query =await db.query('INSERT INTO users (name,phone)VALUES($1,$2) RETURNING *',[name,phone]);
return query.rows[0];
}
const findUser=async(phone,name)=>{
    const query=await db.query('SELECT * FROM users where phone=$1 AND name=$2 ',[phone,name]);
    return query.rows[0];
  
}
module.exports={
    Register,
    findUser
}