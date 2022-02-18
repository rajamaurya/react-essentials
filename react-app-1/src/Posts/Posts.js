import { useState, useEffect, useCallback } from "react"
import { connect } from "react-redux";
import PostFrom from "./PostForm";

import { fetchPosts } from "../actions/postActions";
import { sortPosts } from "../actions/postActions";
const Posts = (props)=>{

    // const [ posts, SetPosts] = useState([]);
    // const [isLoaded, SetIsLoaded] = useState(false);

    useEffect(async ()=>{
        props.fetchPosts();
        // const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        // const data = await posts.json();

        // if(data){
        //     console.log("POSTS: ", data);
        //     SetPosts(data);
        //     SetIsLoaded(true);
        // }
    }, [])

    const postAdded = useCallback(() => {
            return (post)=>{
                console.log(post)
                //SetPosts(prevPost => [...prevPost, post])
            }
        },
        [],
    )
    const sortPost = (e)=>{
        const order = e.target.value;
        props.sortPosts(order, props.posts);
    }

    return (
         <>
          <PostFrom  postAdded = {postAdded}/>
           <div className = "sort">
               <br/>
               Sort By: <select onChange = {sortPost}>
                   <option value="default">Default</option>
                   <option value="asc">Ascending</option>
                   <option value = "desc"> Descending </option>
               </select>
           </div>
            {
            !props.isLoaded?<h2>Loading...</h2>: props.isLoaded && props.posts.length? props.posts.map((post,index)=>{
                  return <div key ={index}>
                        <h2>Title: {post['title']}</h2>
                        <p> <strong>Post</strong>: {post['body']}</p>
                  </div>
            }): <h2>"NO Post Found"</h2>
            }
         </>
    )

    
}
const mapStateToProps = (state)=>({
    posts: state.posts.posts,
    isLoaded: state.posts.isLoaded
})

export default connect(mapStateToProps,{fetchPosts,sortPosts})(Posts);