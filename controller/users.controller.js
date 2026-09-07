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
module.exports=
    getUsers
