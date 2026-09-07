const db=require('../db')
const getUsers=async()=>{
    const query=await db.query('SELECT name,phone FROM users   ');
    return query.rows;
}
module.exports={getUsers};