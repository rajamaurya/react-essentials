import { useContext, useEffect, useState } from "react";
import { usePostContext } from "../../service/postService";
import PostForm from "./PostForm";
import * as postService from "../../service/postService";
import { useCallback } from "react/cjs/react.development";
import PostDetails from "./PostDetails";
import "./post.css";

const Post =  ()=>{
    const usePostCtx = usePostContext();
    const [posts, SetPosts] = useState([]);
    const [isLoaded, SetIsLoaded] = useState(true)

    useEffect( async ()=>{
        const posts = await postService.getAllPosts();
        if(posts){
            SetPosts(posts['data']);
            SetIsLoaded(false)
        }
    },[])

    

    const postFormHandler = useCallback(async (payload)=>{
        // if(postContext!== undefined){
            const createdPost = await postService.createPost(payload);
            if(createdPost){
                console.log("post created: ", createdPost);
                console.log("OLD POST: ", posts)
                const updatedPosts = [...posts, createdPost['data']]
                SetPosts(updatedPosts);
                console.log("NEW POST: ", posts)
            }
       // }
    })

    return (
        <>
            <PostForm postFormHandler = {postFormHandler} />
            <h4>Posts</h4>
            <ul className = "post-container">
            {
                !isLoaded ? posts && posts.map(post=>{
                     return <li key = {post._id} >
                            <PostDetails post={post}  />
                     </li>
                     
                }) : <h4>loading...</h4>
            }
            </ul>
        </>
    )
}

export default Post;