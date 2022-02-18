const AnotherCounter = (props)=>{
    let {count,incrementCount} = {...props};
    return (
        <h2 onClick = {incrementCount} > Clicked AnotherCounter {count} times</h2>
    )
}

export default AnotherCounter;