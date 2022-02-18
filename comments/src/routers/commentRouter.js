const express = require('express');
const axios =  require('axios')
const Comment = require('../models/commentModel');

const CommentRouter = express.Router();


CommentRouter.get("/posts/:id/comments/", async (req,res)=>{
   const postId = req.params.id;
    try{
        const comments = await Comment.find({postId});
        console.log("Comments: ", comments)
        if(comments){
            res.status(200).send(comments);
        }
    }catch(e){
        res.status(500).send(e);
    }
})
CommentRouter.post("/posts/:id/comment", async (req,res)=>{
    console.log(req.params)
   const payload = req.body;
   console.log("payload: ", payload)
   const newComment = new Comment(payload);
    try{

        const comment = await newComment.save();
        if(comment){
            const posts = await axios.post(`http://localhost:4005/comment/events`, {
                type: "COMMENT CREATED",
                data: comment
            });
            //res.status("200").send(body)
            res.status(200).send(comment);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

CommentRouter.post("/events", (req,res)=>{
    console.log("event received: ", req.body);
    try{
        res.send("ok");
    }catch(error){

    }
})


module.exports = CommentRouter;