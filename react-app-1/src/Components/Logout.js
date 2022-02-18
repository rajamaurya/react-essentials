import { useNavigate } from "react-router-dom";

const Logout = (props)=>{
   const navigation = useNavigate();
    const logout = ()=>{
        props.logout();
        navigation('/', {replace: true})
    }
    return(
        <>
          <button onClick = {logout} >Logout </button>
        </>
    )
}

export default Logout;