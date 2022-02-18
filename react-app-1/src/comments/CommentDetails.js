const CommentDetails = (props)=>{

    return (
        <>
            <div>
                <li>{props.postID && props.comment['description']}</li>
            </div>
        </>
    );
}

export default CommentDetails;