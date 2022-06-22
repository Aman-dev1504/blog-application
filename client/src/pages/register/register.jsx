import "./register.css"
import signupimg from "../../assets/signup.gif";
import { Link } from "react-router-dom";
export default function register() {
  return (
    <div className="signup">
        <div className="signup-img">
         <img src={ signupimg } alt="signup...."  loop="infinite"/>   
  
        </div>
        <form className="signupForm">
           <h3>Sign up</h3>
           <input type="text" placeholder="Enter your username" />
            <input type="text" placeholder="Enter your email" />
            <input type="password" placeholder="Enter password"/>
            <button className="signupBtn">Signup</button>
            <span className="Newtxt">Already signed up?</span>
            <button className="signupregisterBtn">
              <Link  className="Link" to="/login">Login</Link>
              </button>
        </form>
    </div>
  )
}
