import { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/postActions";
//const URL = "https://jsonplaceholder.typicode.com/posts";
const PostFrom = (props)=>{
    const [ title, SetTitle]  = useState(null);
    const [post, SetPost] = useState(null);

    const handleTitle = (event)=>{
         SetTitle(event.target.value);
    }

    const handlePost = (event)=>{
        SetPost(event.target.value);
    }

    const handleSubmit = (e)=>{

        e.preventDefault();
       let payload = {
            title,
            body:post
        }
        props.addPost(payload);
        reset();
        // fetch(URL, {
        //     ...PostConfig,
        //     body: JSON.stringify(payload)
        // })
        // .then(res=> res.json())
        // .then(post=> { 
        //     props.postAdded(post);
        // })

    }
    const reset = ()=>{
        SetTitle('');
        SetPost('');
    }
    
     return (
         <>
            <form onSubmit = {handleSubmit}>
                 <div>
                     <label>Title</label><br/>
                     <input name = "title" onChange = {handleTitle} value = {title}  placeholder="title"/> 
                </div>
                 <br/>
                 <div>
                     <label>Post</label><br/>
                     <textarea name = "post" onChange = {handlePost} value = {post} placeholder="your post goes here!" /> 
                 </div>
                 <br/>
                 <div>
                    <button type="submit">Submit Post</button>
                 </div>
            </form>
         </>
     )
}

const mapStateToProps = state=>({
    post: state.posts.post,
    isLoaded: state.posts.isLoaded
})
export default connect(mapStateToProps, {addPost})(PostFrom);