export const logoutActionType = {
    logout: {
        type: "LOG_OUT",
        payload: null
    },
    isLoggedIn: false
}


export const logout = (user)=>(dispatch)=>{
   console.log("in logout action")
    dispatch({
        ...logoutActionType.logout,
        payload: user
    })
}
