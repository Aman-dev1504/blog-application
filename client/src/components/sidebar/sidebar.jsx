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
            src="https://avatars.githubusercontent.com/u/74093536?s=400&u=da1e3aaed0b2ec4db7ca6220926f31609e5524c4&v=4" 
            className="sidebarImage"
             alt="" />
             <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo doloremque voluptates totam iure,
                 eaque modi tenetur,
                 atque sunt est nisi magni quis eligendi qui temporibus aliquid accusamus. Aliquam, odit ,,</p>
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
