export const loginActionTypes = {
    curr_user: {
        type: "CURRENT_USER",
        payload: {}
    },
    isLoggedIn: false
}


export const login = (user)=>(dispatch)=>{

    dispatch({
        ...loginActionTypes.curr_user,
        payload: user
    })
}
