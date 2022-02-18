import { PostActions } from "../actions/postActions";

const initialState = {
   posts: [],
   post: {},
   isLoaded: false
}

const postReducer = (state = initialState, action)=>{

    switch(action.type){
        
       case PostActions.ADD_POST.type: 
       case PostActions.NEW_POST.type:
        {
            console.log("ADD/NEW post reducer gets called!")
            return {
                ...state,
                post: action.payload,
                posts: [...state.posts, action.payload]
            }
        }
    
        case PostActions.FETCH_POSTS.type:{
            console.log("fetch posts reducer gets called!")
            return {
                ...state,
                posts: action.payload,
                isLoaded: true
            }
        }
        case PostActions.ASC_POSTS.type:{
            console.log("ASC_POSTS reducer gets called!")
            return {
                ...state,
                posts: action.payload,
                isLoaded: true
            }
        }
        case PostActions.DESC_POSTS.type:{
            console.log("DESC_POSTS reducer gets called!")
            return {
                ...state,
                posts: action.payload,
                isLoaded: true
            }
        }
        default:
            return {...state}
    }
}

export default postReducer;