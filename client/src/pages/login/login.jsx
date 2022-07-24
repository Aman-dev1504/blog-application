import "./login.css"
import loginimg from "../../assets/login.gif";
import { Link } from "react-router-dom";
import { useContext,useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
export default function Login() {
  const userRef=useRef();
  const passwordRef= useRef();
  const {user,dispatch,isFetching}=useContext(Context);
  const handleSumbit=async(e)=>{ 
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("auth/login/",{
        username: userRef.current.value,
        password: passwordRef.current.value,
      } );
      dispatch({type:"LOGIN_SUCCESS",payload :res.data});  
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  };
  console.log(user);


  return (
    <div className="login">
        <div className="login-img">
         <img src={ loginimg } alt="Login...."  loop="infinite"/>   
  
        </div>
        <form className="loginForm"
         onSubmit={handleSumbit}
         >
           <h3>Log in</h3>
            <input type="text" placeholder="Username"
            ref={userRef}
             />
            <input type="password" placeholder="Enter password"
            ref={passwordRef}
            />
            <button className="loginBtn" type="submit" disabled ={isFetching} >Login</button>
            <span className="Newtxt">New user?</span>
            <button className="loginregisterBtn"> <Link  className="Link" to="/register">Register</Link></button>
        </form>
    </div>
  )
}
