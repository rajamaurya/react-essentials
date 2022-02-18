export const alertActionTypes = {
    success_alert: {
        type: "SUCCESS_ALERT",
        payload: true
    },
    failure_alert: {
        type: "FAILURE_ALERT",
        payload: false
    },
    error_alert: {
        type: "ERROR_ALERT",
        payload: false
    },
}


export const successAlert = ()=>(dispatch)=>{

    dispatch({
        ...alertActionTypes.success_alert,
        payload: true
    })
}