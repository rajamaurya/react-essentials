import { useState } from "react";

const KrishnaCounter = (props)=>{

    let [count, SetCount] = useState(0);

    const incrementCount = ()=>{
        SetCount((prevCount)=>{
            return prevCount +1
        })
    }
    return (
        <>
         {props.render(count,incrementCount)}
        </>
    )
}

export default KrishnaCounter;