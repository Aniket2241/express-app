const db=require('../db');
const jwt=require('jsonwebtoken')
const Register=async(name,phone)=>{
const query =await db.query('INSERT INTO users (name,phone)VALUES($1,$2) RETURNING *',[name,phone]);
return query.rows[0];
}
const Login=async(phone,name)=>{
    const query=await db.query('SELECT * FROM users where phone=$1 AND name=$2 ',[phone,name]);
    const user=query.rows[0];

    console.log("USER:", user);
    console.log("JWT SECRET:", process.env.JWT_SECRET);
    if(!user){
        return null;
    }
    const token=jwt.sign(
        {
            id:user.id,

        },
        process.env.JWT_SECRET,
        {expiresIn:'1h'}
    );
  return token;
}
module.exports={
    Register,
    Login
}