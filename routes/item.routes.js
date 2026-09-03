const express=require('express');
const router=express.Router();
const {getItems,deleteItems,postItems,replaceItems}=require('../controller/items.controller');
router.get('/',getItems);
router.post('/',postItems);
router.put('/',replaceItems);
router.delete('/',deleteItems);
module.exports=router;