
const AuthService=require('../services/auth.service')
const RegisterUser=async(req,res)=>{
    const name=req.body.name;
    const phone=req.body.phone;
    if(!name || !phone){
        return res.status(400).json({message:"Both fields are required"});
    } 
    if(typeof phone!=="string"){
        return res.status(400).json({message:"phone must be a string "});
    }
    if(phone.length!==10){
        return res.status(400).send("Phone must be of length 10");
    }
    
    try{
        const result= await AuthService.Register(name,phone);
       return res.status(201).json(result);
    }
    catch(error){
         console.log(error);
         res.status(500).json({
            message:"database error"
         })
    }
    

};
module.exports={
RegisterUser
}