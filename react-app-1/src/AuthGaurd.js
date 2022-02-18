import { connect } from "react-redux";
import { Route } from "react-router";
import { Routes, useNavigate } from "react-router-dom";


const AuthGuard = (props)=>{
    const navigate = useNavigate();
    alert("IN AUTH GAURD");
    console.log(props.user);
    const RenderComponent = props.element;
    const newComponent = ()=>{
            return (
                <Routes>
                <Route render={
                    (props)=> 
                        props.isLoggedIn ? 
                        navigate("/", {replace:true}) :
                        <RenderComponent {...props}/>
                    }  
                />
                </Routes>
            )

    }

    return newComponent;
}
const mapStateToProps = state=>({
    user: state.users.user,
    isLoggedIn: state.users.isLoggedIn
})
export default connect(mapStateToProps,{} )(AuthGuard);