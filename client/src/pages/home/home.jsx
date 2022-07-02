import { useEffect,useState } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Posts from "../../components/posts/posts";
import "./home.css";
import axios from "axios";
export default function Home() {

const [post,setPosts]=useState([]);


useEffect(() => {
const fetchPosts = async ()=>{
const res = await axios.get("/post")
setPosts(res.data)
}

fetchPosts()
},[]);
  
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
