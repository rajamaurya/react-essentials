import PostConfig from "../config/PostConfig";

const URL = "https://jsonplaceholder.typicode.com/posts";
export const PostActions = {
    "ADD_POST" : {
                    type: "ADD POST",
                    payload: {}
                },
    "NEW_POST" : {
                    type: "NEW POST",
                    payload: {}
                },
    "FETCH_POSTS" : {
                    type: "FETCH POSTS",
                    payload: []
                },
    "ASC_POSTS": {
                type: "ASC_POSTS",
                payload: []
    },
    "DESC_POSTS": {
        type: "DESC_POSTS",
        payload: []
    }

}

export const fetchPosts = ()=>{
    return async function(dispatch){
        console.log("Clling POSTS from fetchPosts: ");
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await posts.json();
    
        if(data){
            console.log("POSTS from fetchPosts: ", data);
            dispatch({
                ...PostActions['FETCH_POSTS'],
                payload: data
            })   
        }
    }
    
}
export const addPost = (payload)=>{
    return async function(dispatch){
    fetch(URL, {
        ...PostConfig,
        body: JSON.stringify(payload)
    })
    .then(res=> res.json())
    .then(post=> { 
        dispatch({
            ...PostActions['ADD_POST'],
            payload: post
        })  
    })
  }
}

export const sortPosts = (order,posts)=>dispatch=>{
     switch(order){
         case "desc": {
             posts = posts.sort((a,b) => a['id']-b['id'])
             console.log("descPosts: ",posts);
            dispatch({
                ...PostActions['DESC_POSTS'],
                payload: [...posts]
            })
         }
         break;
         case "asc":{
            posts = posts.sort((a,b) => b['id']-a['id'])
            console.log("ascPosts: ",posts)
            dispatch({
                ...PostActions['ASC_POSTS'],
                payload: [...posts]
            })
         }
         break;
         default: {
            
         }
     }

}