const express=require('express');
const router=express.Router();
const {RegisterUser,findUser}=require('../controller/auth.controller');
router.post('/register',RegisterUser);
router.get('/users',findUser);
module.exports=router;