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
        src="https://media-exp1.licdn.com/dms/image/D4D35AQENzIXQEq8s5A/profile-framedphoto-shrink_400_400/0/1655110960519?e=1655982000&v=beta&t=xAmMGte5q0MOnLpg-iL10QpYcwtlKhGKB7X3zDC-Gc0" 
        alt="" />
        <i className="topIcon-srch  fa-solid fa-magnifying-glass"></i>
       </div>
    </div>
  )
}
