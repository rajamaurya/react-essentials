import { useEffect, useState } from "react";
import { useCallback } from "react/cjs/react.development";
import * as commentService from "../service/commentService";
import CommentDetails from "./CommentDetails";
import CommentForm from "./CommentForm";

const Comment =  (props)=>{
    const [comments, SetComments] = useState([]);
    const [isLoaded, SetIsLoaded] = useState(true)

    useEffect( async ()=>{
        console.log("postID: ", props.postId)
        const allcomment = await commentService.getAllCommentsByPost(props.postId);
        console.log("COMMENTS:",allcomment)
        if(allcomment){
            SetComments(allcomment['data']);
            SetIsLoaded(false)
        }
    },[])

    

    const postFormHandler = useCallback(async (payload)=>{
        const comment_body = {
            ...payload,
            postId: props.postId
        }
            const comment = await commentService.createComment(comment_body);
            if(comment){
                const updatedComments = [...comments, comment['data']]
                SetComments(updatedComments);
            }
    })

    return (
        <>
        {
            !isLoaded ? comments.map(comment=>{
                    return <div key = {comment._id} >
                           <CommentDetails postID = {props.postId} comment={comment} />
                    </div>
                    
            }) : <h4>loading...</h4>

        }
            <CommentForm postFormHandler = {postFormHandler} />
            <hr/>
            
        </>
    )
}

export default Comment;