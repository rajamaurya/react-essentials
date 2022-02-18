import HOC from "./hoc";

const Counter =(props)=> {
    const {myName, count, incrementCount} = {...props};
    return (
        <>
          <h2>Counter Component</h2>
          <button onClick={incrementCount} >{myName} Clicked {count} times.</button>
        </>
    )
}
export default HOC(Counter,10); // customize the increment as per comp requrement.