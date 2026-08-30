const express=require('express');
const cors = require('cors');
const app= express();
const db=require('./db');
const itemRoutes=require('./routes/item.routes');
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    console.log("user entered  home page");
    res.status(200).json({
        message:"HEY WELCOME!"
    })
});
app.use('/items',itemRoutes);

app.delete('/del-item',async(req,res)=>{
    const id=req.body.id;
    try{
        const result=await db.query('DELETE FROM items where id=$1 RETURNING*',[id]);
        return res.status(201).json(result.rows[0]);
    }
    catch(err){
            console.log(err);
        return res.status(500).json({message:"Database error"});
    }
})
app.listen(5000,()=>{
    console.log("SERVER IS RUNNING AT PORT 5000");
})