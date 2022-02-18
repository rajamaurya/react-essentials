import { connect } from "react-redux";
import React from "react";
import Logout from "./Logout";

import { logout } from "../actions/logoutAction";

const Profile = (props)=>{

   const logoutMe = ()=>{
        console.log("in log out",props.user)
        props.logout(props.user);
   }
    return (
        <>
            <h1>You are in your profile page!</h1>

            <Logout logout = {logoutMe} />
        </>
    )
}


const mapStateToProps = state=>({
    loggedInUser: state.users.user,
    isLoggedIn: state.users.currentUser,
    user: state.users.user
})

export default connect(mapStateToProps, {logout})(Profile);