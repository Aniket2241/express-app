const express=require('express');
const router=express.Router();
const {getUsers,searchUsers}=require('../controller/users.controller')
router.get('/',getUsers);
router.get('/search',searchUsers);
module.exports=router;