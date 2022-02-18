import { logoutActionType } from "../actions/logoutAction"


const initialState = {
    loggedInUser: {},
    isLoggedIn: false
}

const logoutReducer = (state = initialState, action)=>{


    switch(action.type){

        case logoutActionType.logout.type:{
            console.log(" in logout reducer")
            return {
                ...state,
                loggedInUser: null,
                isLoggedIn: false
            }
        }


        default : return {
            ...state
        }
    }
}


export default logoutReducer;