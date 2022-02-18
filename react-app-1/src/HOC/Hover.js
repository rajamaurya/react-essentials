import { useState } from "react"
import HOC from "./hoc";

const Hover = (props)=>{
    const {myName,count, incrementCount} = {...props};
    return (
        <>
         <h2>Hover Component..</h2>
         <h2 onMouseOver={incrementCount}>{myName} Hovered {count} times</h2>
        </>
    )
}

export default HOC(Hover, 20);