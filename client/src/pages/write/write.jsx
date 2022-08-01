import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
        alt="" className="writeImg"/>
      <form action="" className="writeForm">
        <div className="writeformGrp">
            <label htmlFor="fileInput">
            <i className="fa-solid fa-plus writeIcon"></i> 
            </label>
         <input type="file" name="" id="fileInput" style={{display:"none"}}/>
         <input type="text" name="" placeholder="Title" id="writeInput" className="writeInput" autoFocus={true}/>   
        </div>
        <div className="writeformGrp">
            <textarea placeholder="Start writing from here..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
