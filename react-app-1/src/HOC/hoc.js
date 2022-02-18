import { useState } from "react";


const HOC = (OriginalComp,incrementBy)=>{ // do not pass props here
     
     const UpdatedComponent = (props)=>{  // pass props here
       //  alert(JSON.stringify({...props}))
        let [count, SetCount] = useState(0);
        const incrementCount = ()=>{
            SetCount((prevCount)=>{
                return prevCount +incrementBy
             })
        }
       return(
            <OriginalComp count = {count} incrementCount = {incrementCount}  {...props} />
        ) 
    }
    return UpdatedComponent;
}

export default HOC;