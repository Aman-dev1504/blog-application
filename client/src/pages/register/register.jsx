import "./register.css"
import signupimg from "../../assets/signup.gif";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  
  return (
    <div className="signup">
        <div className="signup-img">
         <img src={ signupimg } alt="signup...."  loop="infinite"/>   
  
        </div>
        <form className="signupForm" onSubmit={handleSubmit}>
           <h3>Sign up</h3>
           <input type="text" 
           placeholder="Enter your username" 
           onChange={e=>setUsername(e.target.value)} />

            <input type="text" 
            placeholder="Enter your email"
            onChange={e=>setEmail(e.target.value)}   />
            <input type="password" placeholder="Enter password"
             onChange={e=>setPassword(e.target.value)} />
            <button className="signupBtn" type="submit">Signup</button>
            <span className="Newtxt">Already signed up?</span>
            <button className="signupregisterBtn">
              <Link  className="Link" to="/login">Login</Link>
              </button>
           {error && <span style={{color:"red"}}>Something went worng!</span>}
        </form>
    </div>
  )
}
