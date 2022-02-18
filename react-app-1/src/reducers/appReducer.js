import { combineReducers } from "redux";
import logoutReducer from "./logoutReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
    posts: postReducer,
    users: userReducer,
    logout: logoutReducer
})

export default appReducer;