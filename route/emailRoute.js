const Route = require("express").Router();
const EmailModel = require("../models/emailModel")

// getemail
Route.post("/getmail",(req,res)=>{
    EmailModel.create({
        "email":req.body.email
    }).then(()=>{
        console.log("success to save in db")
    }).catch((err)=>{
        console.log(err)
    })
    console.log("aa")
    
});


module.exports = Route


