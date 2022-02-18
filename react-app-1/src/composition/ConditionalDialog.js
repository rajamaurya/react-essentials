import AlertDialog from "./AlertDialog"
import Dialog from "./Dialog"
import WelcomeDialog from "./WelcomeDialog"

const ConditionalDialog = (props) => {
    return (

        <>
            {
            props.type == "alert" ? <Dialog> <AlertDialog/> </Dialog>
                                  : <Dialog> <WelcomeDialog/> </Dialog>
            }
        </>
    )
}

export default ConditionalDialog;