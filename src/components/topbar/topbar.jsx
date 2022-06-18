import "./topbar.css"

export default function topbar() {
  return (
    <div className="top">
       <div className="topLeft">
       <i className="topIcon fa-brands fa-facebook"></i>
       <i className="topIcon fa-brands fa-twitter"></i>
       <i className="topIcon fa-brands fa-pinterest"></i>
       <i className="topIcon fa-brands fa-instagram"></i>
       </div>
       <div className="topCenter">
        <ul className="topList">
         <li className="topList-item">Home</li>
         <li className="topList-item">About</li>
         <li className="topList-item">Contact</li>
         <li className="topList-item">Write</li>
         <li className="topList-item">Log-out</li>
        </ul>
       </div>
       <div className="topRight">
        <img className="top-img"
        src="https://avatars.githubusercontent.com/u/74093536?s=400&u=da1e3aaed0b2ec4db7ca6220926f31609e5524c4&v=4" 
        alt="" />
        <i className="topIcon-srch  fa-solid fa-magnifying-glass"></i>
       </div>
    </div>
  )
}
