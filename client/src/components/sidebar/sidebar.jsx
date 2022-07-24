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
            src="https://scontent.fbho2-1.fna.fbcdn.net/v/t1.6435-9/132571703_105067458177607_2777104514256052089_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1rlu_LxuHPsAX8KkTsD&_nc_ht=scontent.fbho2-1.fna&oh=00_AT8_yhlifduRkmXAUD8wqHljiTrg8qVNsGHf28sX-SRDww&oe=630420E3" 
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
