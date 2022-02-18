const express = require('express');
const Post = require('../models/postModel');
const axios = require('axios');

const PostRouter = express.Router();


PostRouter.get("/posts", async (req,res)=>{

    try{
        const posts = await Post.find();
        if(posts){
            res.status(200).send(posts);
        }
    }catch(e){
        res.status(500).send(e);
    }
})
PostRouter.post("/post", async (req,res)=>{
   const payload = req.body;
   console.log("payload: ", payload)
   const newPost = new Post(payload);
    try{

        const post = await newPost.save();
        console.log("POST: ", post);
        
        if(post){
            await axios.post("http://localhost:4005/post/events", {
                 type:"POST_CREATED",
                 data: payload
            });
            res.status(200).send(post);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = PostRouter;