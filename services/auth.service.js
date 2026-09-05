const db=require('../db');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt');
const Register=async(name,phone,password)=>{
    const hashedPassword= await bcrypt.hash(password,10);
const query =await db.query('INSERT INTO users (name,phone,password)VALUES($1,$2,$3) RETURNING *',[name,phone,hashedPassword]);
return query.rows[0];
}
const Login=async(password,name)=>{
    const query=await db.query('SELECT * FROM users where  name=$1 ',[name]);
    const user=query.rows[0];
    if(!user){
        return null;
    }
    const passwordMatch=await bcrypt.compare(password,user.password);
    if(!passwordMatch){
        return null;
    }

    // console.log("USER:", user);
    // console.log("JWT SECRET:", process.env.JWT_SECRET);
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