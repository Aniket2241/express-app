const db=require('../db')
const getUsers=async()=>{
    const query=await db.query('SELECT name,phone FROM users   ');
    return query.rows;
}
async function searchUser(name){
    const query=await db.query('select * from users where name=$1',[name]);
    return query.rows;
}
module.exports={getUsers,searchUser};