
const authService=require('../services/auth.service')
const edit=async(req,res)=>{
const name=req.body.name;
if(!name){
    return res.status(400).json({
        message:"New name is required"
    })
}
const userID=req.user.id;
try{
    const result=await authService.editProfile(name,userID);
    return res.status(200).json({message:"user updated successfully"});
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