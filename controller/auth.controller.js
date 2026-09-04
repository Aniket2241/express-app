
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
         console.log("LOGIN ERROR:", error);
         console.log(error);
         res.status(500).json({
            message:"database error"
         })
    }
    

};
const findUser=async(req,res)=>{
    const phone=req.body.phone;
    const name=req.body.name;
    if(!phone || !name){
        return res.status(400).json({message:"Both values are needed to confirm user"});
    }
    try{
  const result=await AuthService.Login(phone,name);
  if(!result){
    return res.status(401).json({
        message:"User not authorised"
    });
  }
  
    return res.status(200).json({message:"User logged in ",
        token:result
    });

    }
    catch(error){
        return res.status(500).json({message:"Database error"});
    }
  
}
module.exports={
RegisterUser,
findUser
}