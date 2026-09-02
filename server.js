const express=require('express');
const cors = require('cors');
const app= express();
const db=require('./db');
const itemRoutes=require('./routes/item.routes');
const AuthRoutes=require('./routes/auth.routes')
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    console.log("user entered  home page");
    res.status(200).json({
        message:"HEY WELCOME!"
    })
});
app.use('/items',itemRoutes);
app.use('/auth',AuthRoutes);
app.listen(5000,()=>{
    console.log("SERVER IS RUNNING AT PORT 5000");
})