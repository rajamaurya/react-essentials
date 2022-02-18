const AlertDialog = ()=>{

    return (
        <>
        <span>This is an alert dialog.</span>
        <div>
            <button onClick = {()=>{ alert("Alert button has been triggered..");}} >Alert</button>
        </div>
        </>
    )
}

export default AlertDialog;