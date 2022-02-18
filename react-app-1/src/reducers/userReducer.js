import { UserActionTypes } from "../actions/userActions";

const initialState = {
    user: {},
    users: [],
    isLoggedIn: false,
    status: false,
    currentUser: {}
}
const userReducer = (state =  initialState, action )=>{

    switch(action.type){
        case UserActionTypes.Add_User.type:{
            return {
                ...state,
                user: action.payload,
                currentUser: action.payload,
                users: [...state.users, action.payload],
                status: true
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default userReducer;