import { useEffect,useState } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Posts from "../../components/posts/posts";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function Home() {

const [post,setPosts]=useState([]);
const {search} = useLocation();



useEffect(() => {
const fetchPosts = async ()=>{
const res = await axios.get("/post"+search)
setPosts(res.data)
}

fetchPosts()
},[search]);
  
  return (
    <>
      <Header/>
      <div className="home">
       <Posts post={post}/>
       <Sidebar/>

      </div>
    </>
  )
}
