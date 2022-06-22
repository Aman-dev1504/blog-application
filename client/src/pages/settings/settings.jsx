import"./settings.css"
import Sidebar from "../../components/sidebar/sidebar"
export default function settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingupdateTitle">Update account details <i className="fa-solid fa-gear"></i></span>
        <span className="settingdeleteTitle">Delete account <i className="fa-solid fa-user-xmark"></i> </span>
      </div>
      <form className="settingsForm">
        <label >Profile picture</label>
       <div className="settingsPp">
        <img 
        src="https://avatars.githubusercontent.com/u/74093536?s=400&u=da1e3aaed0b2ec4db7ca6220926f31609e5524c4&v=4" 
        alt="" />
        <label htmlFor="fileInput">
            <i className="settingsIcon far fa-user-circle"></i>
        </label>
        <input type="file" id="fileInput" style={{display:"none"}}/>
       </div>
       <label >Username</label>
       <input type="text" placeholder="Aman" id="" />
       <label >Email</label>
       <input type="email" placeholder="aman@gmail.com" id="" />
       <label >Password</label>
       <input type="password"  id="" />
       <button className="settingsSubmit">Update</button>
      </form>
      </div>
      <Sidebar/>
    </div>
  )
}
