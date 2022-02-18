const Counter1 = (props)=>{
    let {count,incrementCount} = {...props};
    return (
        <h2 onClick = {incrementCount} > Clicked Counter {count} times</h2>
    )
}

export default Counter1;