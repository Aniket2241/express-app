const { response } = require("express");

const edit=async(req,res)=>{
const name=req.body.name;
if(!name){
    return res.status(400).json({
        message:"New name is required"
    })
}
const userID=req.user.id;
try{
    const result=await authservice.editProfile(name,userID);
    return response.status(200).json(result);
}
catch(error){
    console.log(error);
    return res.status(500).json({
        message:"Database error"
    })
}
}
module.exports={
    edit
}