const jwt=require('jsonwebtoken');
const authMiddleware=(req,res,next)=>{
    const authHeaders=req.headers.authorization;
    if(!authHeaders){
        return res.status(401).json({
            message:"Auth token is required"
        })
    }
    const token =authHeaders.split('')[1];
    try{
        const decoded=jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        req.user=decoded;
        next();
    }
    catch(error){
console.log(error);
return res.status(401).json({
    message:"invalid or expire token"
})
    }
}
module.exports=authMiddleware;