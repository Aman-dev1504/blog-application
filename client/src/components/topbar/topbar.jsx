import "./topbar.css"
import { Link } from "react-router-dom"
export default function topbar() {
  const user=false;
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
         <li className="topList-item">
         {user && "Log-out"}
         </li>
        </ul>
       </div>
       <div className="topRight">
      {
        user ?(
          <img className="top-img"
          src="https://avatars.githubusercontent.com/u/74093536?s=400&u=da1e3aaed0b2ec4db7ca6220926f31609e5524c4&v=4" 
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
