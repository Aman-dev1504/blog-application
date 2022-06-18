import"./settings.css"
import Sidebar from "../../components/sidebar/sidebar"
export default function settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
      <div className="settingTitle">
        <span className="settingupdateTitle">Update account details</span>
        <span className="settingdeleteTitle">Delete account </span>
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
      </form>
      </div>
      <Sidebar/>
    </div>
  )
}
