import axios from 'axios';

const baseUrl = "http://localhost:4002";
const CommentService = (props)=>{
    
    return (
        <>
        </>
    );
}

export const getAllCommentsByPost = async (postId)=>{
        const res = await axios.get(`${baseUrl}/posts/${postId}/comments`);
        if(!res){
            return []
        }
        return res;
     }
export const createComment = async (body)=>{
     console.log(body)
     const res = await axios.post(`${baseUrl}/posts/:id/comment`, body, {
         headers:{
             "Content-type":"application/json" 
         }
     });
     console.log("createdComment: " , res)
     if(!res){
        return {}
    }
     return res;
  }

export default CommentService;