import "./login.css"
import loginimg from "../../assets/login.gif";
import { Link } from "react-router-dom";
export default function login() {
  return (
    <div className="login">
        <div className="login-img">
         <img src={ loginimg } alt="Login...."  loop="infinite"/>   
  
        </div>
        <form className="loginForm">
           <h3>Log in</h3>
            <input type="text" placeholder="Enter your email" />
            <input type="password" placeholder="Enter password"/>
            <button className="loginBtn">Login</button>
            <span className="Newtxt">New user?</span>
            <button className="loginregisterBtn"> <Link  className="Link" to="/register">Register</Link></button>
        </form>
    </div>
  )
}
