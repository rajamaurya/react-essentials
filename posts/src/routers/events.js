const express = require('express');

const eventRouter = express.Router();

eventRouter.post("/events", (req,res)=>{
    console.log("event received: ", req.body);
    try{
        res.send("ok");
    }catch(error){

    }
})

module.exports = eventRouter;