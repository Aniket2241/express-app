const express=require('express');
const router=express.Router();
const {getItems,postItems,replaceItems}=require('../controller/items.controller');
router.get('/',getItems);
router.post('/',postItems);
router.put('/',replaceItems);
module.exports=router;