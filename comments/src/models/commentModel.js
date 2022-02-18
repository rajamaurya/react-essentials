const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
     description: {
        type: String,
        
     },
     postId:{
        type: String
     }
})

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;