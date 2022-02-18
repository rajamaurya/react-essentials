import React, {useEffect, useRef, useState} from "react";

export default React.forwardRef(
    (props,ref)=> {
    const [fname, setFName] = useState(null);
    const [lname, setLName] = useState(null);

    const fnameRef = useRef();
    const lnameRef = useRef();
    const sRef = useRef();

    useEffect(()=>{
        //alert("page Loaded");
        fnameRef.current.focus();
    },[]);

    const fnameHandler = (e)=>{
        setFName(e.target.value);
        //lnameRef.current.focus();
    }
    const lnameHandler = (e)=>{
        setLName(e.target.value);
        //sRef.current.focus();
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        alert(JSON.stringify({
            fname,
            lname
        }))
    }
    return <>
    First Name: <input ref = {fnameRef} onChange = {fnameHandler} {...props} /> <br/>
    Last Name: <input ref = {lnameRef} onChange = {lnameHandler} {...props} /> <br/>
    <button onClick = {submitHandler} ref={sRef} >Submit</button>
    </>
    }
)