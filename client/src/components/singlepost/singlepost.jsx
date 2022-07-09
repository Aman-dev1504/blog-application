import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "./singlepost.css"
import { useState } from "react";

export default function Singlepost() {

const location= useLocation();
const path= (location.pathname.split("/")[2]);
const [post,setPosts]=useState({})
useEffect(()=>{
  const getPost = async () =>{
    const res =await axios.get("/post/"+path)
    setPosts(res.data);
  };
  getPost()
},[path]);

  return (
    <div  className="singlePost">
    <div className="singlepostWrapper">
      {post.photo &&
        <img 
        src={post.photo} alt="" className="singlepostImg" />
      }
        <h1 className="singlepostTitle">{post.title}
        <div className="singlepostEdit">
        <i className="singlepostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlepostIcon fa-solid fa-trash-can"></i>
        </div>
        </h1>
        <div className="singlepostInfo">
            <span className="singlepostAuthor">Author: 
            <Link to ={`/?user=${post.username}`} className="Link">
            <b>{post.username}</b>
            </Link>
            </span>
            <span className="singlepostDate">Posted: {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlepostDes">
            {post.desc}
        </p>
    </div>
         </div>
  )
}
