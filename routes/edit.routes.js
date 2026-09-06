const express=require('express');
const router=express.Router();
const {edit}=require('../controller/edit.controller');
const authMiddleware=require('../middleware/auth.middleware');
router.patch('/Profile',authMiddleware,edit);
module.exports=router;