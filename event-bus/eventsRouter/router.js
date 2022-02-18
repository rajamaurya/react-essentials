const  express = require('express');
const axios = require('axios');
const router = express.Router();


const Post  = require('../models/Post');
const Comment = require('../models/Comment');

const postServer = "http://localhost:4001";
const commentServer = "http://localhost:4002";

router.get("/event/posts", async (req,res)=>{
       const body = req.body;
       console.log("BODY: ", body);
       try{
              // const posts = await axios.post(`${postServer}/events`, body);
              // const cmts = await axios.post(`${commentServer}/events`, body);
              if(posts){
                  res.status(200).send(posts);
              }
          }catch(e){
              res.status(500).send(e);
          }
})

router.post("/post/events", async(req,res)=>{
       const body = req.body;
       console.log("BODY: ", body);
       try{
              const posts = await axios.post (`${postServer}/events`, body);
              const cmts = await axios.post(`${commentServer}/events`, body);
              res.status("200").send(body)
       }catch(error){
              
       }
       // try{
       //        const posts = await axios.get(`${postServer}/posts`);
       //        if(posts){
       //            res.status(200).send(posts);
       //        }
       //    }catch(e){
       //        res.status(500).send(e);
       //    }
});
       
router.get("/event/comments",(req,res)=>{
       
})

router.post("/comment/events", async (req,res)=>{
       const body = req.body;
       console.log("Commetn BODY: ", body);
       try{
              const posts = await axios.post (`${postServer}/events`, body);
              const cmts = await axios.post(`${commentServer}/events`, body);
              res.status("200").send(body)
       }catch(error){
              
       }
})

module.exports = router;