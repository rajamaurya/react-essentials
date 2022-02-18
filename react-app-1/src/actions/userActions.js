export const UserActionTypes = {
    Add_User: {
        type: "ADD_USER",
        payload: {}
    },
    Del_User: {
        type: "DELETE_USER",
        payload: {
        }
    },
    List_Users: {
        type: "USERS_LIST",
        payload: []
    }
}


export const fetchUsers = ()=>{
    console.log("User fetchUsers action called...");
    return (dispatch)=>{
        dispatch({
            ...UserActionTypes.List_Users,
            payload: []
        })
    }
}

export const addUser = (newUser)=>dispatch=>{
    console.log("User ADD User action called...", newUser);
        const res = dispatch({
            ...UserActionTypes.Add_User,
            payload: newUser
     })
     return  res;
}