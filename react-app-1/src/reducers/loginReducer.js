import { loginActionTypes } from "../actions/loginActions"


const initialState = {
    loggedInUser : {},
    isLoggedIn: false
}

const loginReducer = (state = initialState, action)=>{


    switch(action.type){

        case loginActionTypes.curr_user.type:{
            return {
                ...state,
                loggedInUser: action.payload,
                isLoggedIn: true
            }
        }


        default : return {
            ...state
        }
    }
}


export default loginReducer;