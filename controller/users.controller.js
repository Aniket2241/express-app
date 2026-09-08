const userService=require('../services/users.service')
const getUsers=async(req,res)=>{
try{
    const result=await  userService.getUsers();
    return res.status(200).json(result);
}
catch(error){
    console.log(error);
    return res.status(500).json({message:"Database error"});
}}
const searchUsers=async(req,res)=>{
    const user=req.query.name;
    try{
    const result=await userService.searchUser(user);
    if(result.length===0){
        return res.status(404).json({message:"NO such user found"})
    }
     return res.status(200).json(result);
}
catch(error){
    return res.status(500).json({message:"DAtabase error"})
}}
module.exports={
    getUsers,
searchUsers}
