const express=require('express');
const router=express.Router();
const {edit}=require('../controller/edit.controller');
router.put('/-profile',edit);
module.exports=router;