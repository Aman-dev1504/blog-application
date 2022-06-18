import "./sidebar.css"

export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About me</span>
            <img 
            src="https://avatars.githubusercontent.com/u/74093536?s=400&u=da1e3aaed0b2ec4db7ca6220926f31609e5524c4&v=4" 
            className="sidebarImage"
             alt="" />
             <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo doloremque voluptates totam iure,
                 eaque modi tenetur,
                 atque sunt est nisi magni quis eligendi qui temporibus aliquid accusamus. Aliquam, odit ,,</p>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">DSA</li>
            <li className="sidebarListItem">React</li>
            <li className="sidebarListItem">Nodejs</li>
            <li className="sidebarListItem">Express</li>
            <li className="sidebarListItem">RestAPI</li>
            <li className="sidebarListItem">MongoDB</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
       <i className="sidebarIcon fa-brands fa-facebook"></i>
       <i className="sidebarIcon fa-brands fa-twitter"></i>
       <i className="sidebarIcon fa-brands fa-pinterest"></i>
       <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
        </div>
        </div>
    </div>
  )
}
