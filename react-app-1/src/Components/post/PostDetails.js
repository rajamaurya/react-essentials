import Comment from "../../comments/comment";
import "./post.css";

const PostDetails = (props)=>{

    return (
            <div className="post-sub">
                {props.post['description']}
                 <Comment postId = {props.post._id}/>
            </div>
    );
}

export default PostDetails;