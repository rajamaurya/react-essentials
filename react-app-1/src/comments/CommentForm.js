import { useRef, useState } from "react";

const CommentForm = (props)=>{
    const [description,  SetDescription] = useState('');
    const descRef = useRef('');

    const postHandler = (event)=>{
        SetDescription(event.target.value);
    }

    const submit =(e)=>{
        e.preventDefault();
         props.postFormHandler({description});
    }
    return (
        <>
                <form onSubmit = {submit}>
                    <div>
                        <textarea name="desc" placeholder="post here.." value = {description} ref = {descRef}  onChange={postHandler}/>
                    </div>
                    <div>
                        <button> submit </button>
                    </div>
                </form>
        </>
    )
}


export default CommentForm;