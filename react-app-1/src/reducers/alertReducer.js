import { alertActionTypes } from "../actions/alertActions"


const initialState = {
    status : {},
}

const alertReducer = (state = initialState, action)=>{


    switch(action.type){

        case alertActionTypes.success_alert.type:{
            return {
                ...state,
                status: action.payload
            }
        }


        default : return {
            ...state
        }
    }
}


export default alertReducer;