import React from "react";
import { useState, useEffect } from "react"
import axios from "axios"
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats] =useState([]);

  useEffect(()=>{
    const getCats= async ()=>{
      const res= await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About me</span>
            <img 
            src="data:image/png;base64,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"
            className="sidebarImage"
             alt="" />
             <p>"We’re dedicated to giving you valuable content with a focus on Technology, Business, Online earning and Investing, and Learning News skills ,,</p>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
      {cats.map(c=>(
        <Link to={`/?cat=${c.name}`} className="Link">
        <li className="sidebarListItem">{c.name}</li>
        
        </Link>

      ))}
  
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
       <i className="sidebarIcon fa-brands fa-facebook"></i>
       <i className="sidebarIcon fa-brands fa-twitter"></i>
       <i className="sidebarIcon fa-brands fa-pinterest"></i>
       <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
        </div>
        </div>
    </div>
  )
}
