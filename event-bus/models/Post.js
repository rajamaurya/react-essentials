const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
     description: {
        type: String,
        
     }
})

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;