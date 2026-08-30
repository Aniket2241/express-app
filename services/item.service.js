const db=require('../db');
const getItems=async()=>{

    const getData=await db.query('SELECT * FROM items');
    return getData.rows;

}
const postItems=async(name,price)=>{
    const post=await db.query('INSERT INTO items(name,price)VALUES($1,$2) RETURNING*',[name,price]);
    return post.rows[0];}

const replaceItems=async(id,name,price)=>{
    const replace=await db.query('update items set name=$1 ,price=$2 where id=$3 RETURNING *',[name,price,id]);
    return replace.rows[0];
}
module.exports={
    getItems,
    postItems,
    replaceItems
};