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
            src=""
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
