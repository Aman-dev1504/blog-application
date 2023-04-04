import"./settings.css"
import { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar"
import axios from "axios";
import { Context } from "../../context/Context";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingupdateTitle">Update account details <i className="fa-solid fa-gear"></i></span>
        <span className="settingdeleteTitle">Delete account <i className="fa-solid fa-user-xmark"></i> </span>
      </div>
      <form className="settingsForm" onSubmit={handleSubmit}>
        <label >Profile picture</label>
       <div className="settingsPp">
           <img
              src={file ? URL.createObjectURL(file) : PF +user.profilePic}
              alt=""
            />
        <label htmlFor="fileInput">
            <i className="settingsIcon far fa-user-circle"></i>
        </label>
        <input type="file" id="fileInput" style={{display:"none"}}  onChange={(e) => setFile(e.target.files[0])}/>
       </div>
       <label >Username</label>
       <input type="text" placeholder="Aman" id=""   onChange={(e) => setUsername(e.target.value)}/>
       <label >Email</label>
       <input type="email" placeholder="aman@gmail.com" id="" onChange={(e) => setEmail(e.target.value)} />
       <label >Password</label>
       <input type="password"  id=""  onChange={(e) => setPassword(e.target.value)}/>
       <button className="settingsSubmit">Update</button>
       {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
      </form>
      </div>
      <Sidebar/>
    </div>
  )
}
