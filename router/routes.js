
const express=require('express');
const router =express.Router();
const userCreate=require("../controler/userControl")

router.get("/get",userCreate)

module.exports=router;