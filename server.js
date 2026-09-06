const express=require('express');
const cors = require('cors');
const app= express();
const itemRoutes=require('./routes/item.routes');
const AuthRoutes=require('./routes/auth.routes');
const editRoutes=require('./routes/edit.routes');
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
app.use('/edit',editRoutes);
app.listen(5000,()=>{
    console.log("SERVER IS RUNNING AT PORT 5000");
})