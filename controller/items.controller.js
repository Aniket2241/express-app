const itemService=require('../services/item.service');
const getItems=async(req,res)=>{
    console.log("User Requested items");
    try{
        const result=await itemService.getItems();
        res.status(200).json(result);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Database error"
        })
    }

}
const postItems=async(req,res)=>{
    try{
    const price=req.body.price;
    const name=req.body.name;
    if(!name||!price){
        return res.status(400).json({
            error:"name and price are required "
        });
    }
    
   const result=await itemService.postItems(name,price);
   res.status(200).json(result);}
    catch(err){
        console.log(err);
        return res.status(500).json({message:"Database error"});
    }}
    const replaceItems=async(req,res)=>{
        const name=req.body.name;
        const price=req.body.price;
        const id=req.body.id;
        if(!id){
            return res.status(400).json({message:"id is required"});
        }
        if(!name && !price){
            return res.status(400).json({message:"Add atleast one attribute"});
        }
        const result=await itemService.replaceItems(id,name,price);
        res.status(201).json(result);
    }
module.exports={
    getItems,
    postItems,
    replaceItems
}