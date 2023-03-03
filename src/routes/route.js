const express = require('express');
const router=express.Router()
const {createUser,userOtpSend,userLogin}=require("../controllers/userController")

const {createImage, getImage, updateImage, deleteImage}=require("../controllers/imageController.js");
const { authenticate } = require('../middleware/auth');
const {createDocument,getDocument,updateDocument,deleteDocument,} = require('../controllers/documentController');

// user routes
router.post("/register",createUser)
router.post("/user/sendotp",userOtpSend);
router.post("/user/login",userLogin);

//create image
router.post("/createImage",createImage);
router.get("/getImage",getImage);
router.put("/updateImage/:id",authenticate,updateImage);
router.delete("/deleteImage/:id",authenticate,deleteImage);


// document routes
router.post("/createDocument",createDocument);
router.get("/getDocument",getDocument);
router.put("/updateDocument/:id",authenticate,updateDocument);
router.delete("/deleteDocument/:id",authenticate,deleteDocument);
module.exports=router