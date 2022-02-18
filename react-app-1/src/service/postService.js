import axios from 'axios';
import { createContext } from 'react';
import { useContext } from 'react';

const baseUrl = "http://localhost:4001";
export const PostServiceContext = createContext();

const PostService = (props)=>{

    // wrap all service in an object
    const postServiceContainer = {
        getAllPosts : async ()=>{
            const res = await axios.get(`${baseUrl}/posts`);
            console.log("res received: " , res)
            if(!res){
                return []
            }
            return res;
         },
        createPost : async (body)=>{
            console.log("body: ", body)
             const res = await axios.post(`${baseUrl}/post`, body);
             console.log("createdpost: " , res)
             if(!res){
                return {}
            }
             return res;
          }
    }
    
    return (
        <>
            <PostServiceContext.Provider value = {postServiceContainer}>
                 {props.children}
            </PostServiceContext.Provider>
        </>
    );
}
export const usePostContext = ()=>{
    return  useContext(PostServiceContext)
}
export const getAllPosts = async ()=>{
        const res = await axios.get(`${baseUrl}/posts`);
        console.log("res received: " , res)
        if(!res){
            return []
        }
        return res;
     }
export const createPost = async (body)=>{
     console.log(body)
     const res = await axios.post(`${baseUrl}/post`, body, {
         headers:{
             "Content-type":"application/json" 
         }
     });
     console.log("createdpost: " , res)
     if(!res){
        return {}
    }
     return res;
  }

export default PostService;