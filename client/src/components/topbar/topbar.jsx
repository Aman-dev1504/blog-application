import "./topbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Topbar() {
  const {user,dispatch}=useContext(Context);
  const handleLogout=()=>{
   dispatch({type:"Logout"})
  }
  return (
    <div className="top">
       <div className="topLeft">
       <i className="topIcon fa-brands fa-facebook"></i>
       <i className="topIcon fa-brands fa-twitter"></i>
       <i className="topIcon fa-brands fa-pinterest"></i>
       <i className="topIcon fa-brands fa-instagram"></i>
       </div>
       <div className="topCenter">
        <ul className="topList">
         <li className="topList-item">
          <Link className="Link" to="/">Home</Link>
          </li>
         <li className="topList-item">
         <Link className="Link" to="/about">About</Link>
         </li>
         <li className="topList-item">
         <Link className="Link" to="/contact">Contact</Link>
         </li>
         <li className="topList-item">
         <Link  className="Link" to="/write">Write</Link>
         </li>
         <li className="topList-item" onClick={handleLogout}>
         {user && "Log-out"}
         </li>
        </ul>
       </div>
       <div className="topRight">
      {
        user ?(
          <img className="top-img"
          src={user.profilepic}
          alt="" />
        ):(
          <ul className="topList">
            <li  className="topList-item"> 
            <Link  className="Link" to="/login">Log-in</Link> </li>
            <li  className="topList-item">
            <Link  className="Link" to="/register">Register</Link>
               </li>
        
       
          </ul>
        )
      }
         

        <i className="topIcon-srch  fa-solid fa-magnifying-glass"></i>
       </div>
    </div>
  )
}
