import { useState } from "react"
import "./write.css"
import axios from "axios"
import { useContext} from "react";
import { Context } from "../../context/Context";
export default function Write() {
  const [title,setTitle]= useState("");
  const [desc,setDesc]= useState("");
  const [file,setFile]= useState(null);
  const {user} =useContext(Context);
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,
      desc,
    };
    if(file){
      const data =new FormData();
      const filename=Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo= filename;
      try{
        await axios.post("/upload",data)
      }catch(err){
      }
    };
    try{
      const res= await axios.post("/post",newPost);
      window.location.replace("/post/"+res.data._id);
    } catch (err){

    }
  }
  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)}
        alt="" className="writeImg"/>
      )}
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeformGrp">
            <label htmlFor="fileInput">
            <i className="fa-solid fa-plus writeIcon"></i> 
            </label>
         <input type="file" name="" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])} />
         <input type="text" name="" placeholder="Title" id="writeInput" className="writeInput" autoFocus={true} onChange={ e=>setTitle(e.target.value)}/>   
        </div>
        <div className="writeformGrp">
            <textarea placeholder="Start writing from here..." type="text" className="writeInput writeText" onChange={ e=>setDesc(e.target.value)}></textarea>
        </div>
        <button className="writeSubmit" type="Submit">Publish</button>
      </form>
    </div>
  )
}
