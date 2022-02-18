import { connect } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
//import { useNavigate } from "@reach/router"
import { useState } from "react/cjs/react.development";
import { addUser } from "../../actions/userActions";
import"./LoginModel.css";

import SuccessAlert from "../../Alerts/SuccessAlert";

const LoginSignupView =  (props) =>{
    const navigate = useNavigate();

    const [userEmail, SetUserEmail] = useState(null);
    const [userPassword, SetUserPassword] = useState(null);
    const [successAlert, setSuccessAlert] = useState(null);
    const [unsetAlert, SetUnsetAlert]  = useState(null);

    const inputHandler = (e)=>{
        SetUserEmail(e.target.value)
    }
    const passwordHandler = (e)=>{
        SetUserPassword(e.target.value)
    }

    const submitHanlder = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const id = generateRandomId();
        const body = {
            userEmail,
            userPassword,
            id
        }
       if(props.type !== "Log in"){
        const res = await props.addUser(body);
            if(res){
                if(props.status){
                    let timer = null;
                    timer = setTimeout(()=>{
                         return setSuccessAlert(()=><SuccessAlert />);
                    },500)

                    SetUnsetAlert(()=> setTimeout(()=>{
                        clearTimeout(timer)
                        setSuccessAlert(null);
                        navigate("/login", { replace: true });
                    },2000));
                }
               
            }
       }else{
           const count = authenticateUser(userEmail,userPassword);
           if(count){
                navigate( '/profile', { replace: true, data:  props.user });
           }else{
                // navigate back to sign up page/default page/landing page
                 navigate('/', { replace: true });
           }
       }
       
       reset()
    }
    const authenticateUser= (userEmail,userPassword)=>{
        const email = props.user && props.user.userEmail
        const password = props.user && props.user.userPassword

        if(email == userEmail && password == userPassword){
            return 1
        }

        return 0;
    }
    const reset = ()=>{
        SetUserEmail('');
        SetUserPassword('');
    }
    const generateRandomId = ()=>Math.floor(Math.random()* 1000);

    return (
        <>
            {props.status? successAlert: ''}
             {props.type !== "Log in"? <h4 style = {{textAlign: "center"}}>Sign Up</h4>: <h4 style = {{textAlign: "center"}}>Log In</h4>}
            <form onSubmit = {submitHanlder} className = "form-view">
                 <div>
                     <label>Email</label> <br/>
                     <input type = "text" name = "email" placeholder="email" onChange = {inputHandler} />
                 </div>
                 <br/>
                 <div>
                     <label>Password</label> <br/>
                     <input type = "password" name = "password" placeholder="password" onChange = {passwordHandler} />
                 </div>
                 <br/>
                 <div>
                     <button type = "submit"> {props.type} </button>
                 </div>
            </form>

            {
              props.type !== "Log in"
              ?<p className="form-view">Already have an account! <span><Link to= "/login">Log in</Link></span></p>
              :''
            }
        </>
    )
}

const mapStateToProps = state=>({
    user: state.users.user,
    currentUser: state.users.currentUser,
    status: state.users.status
})
export default connect(mapStateToProps, {addUser})(LoginSignupView);