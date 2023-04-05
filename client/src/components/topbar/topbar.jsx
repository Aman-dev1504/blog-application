import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext, useState,useEffect } from "react";
import { Context } from "../../context/Context";
import { useHistory } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "Logout" });
  };
  useEffect(() => {
    AOS.init();
  }, [])
  const PF = "http://localhost:3000/images/";

  const [searchToggled, setSearchToggled] = useState(false);

  const toggleSearch = () => {
    setSearchToggled(!searchToggled);
  };

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
          <li className="topList-item">
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
          <li className="topList-item">
            <Link className="Link" to="/about">
              About
            </Link>
          </li>
          <li className="topList-item">
            <Link className="Link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topList-item">
            <Link className="Link" to="/write">
              Write
            </Link>
          </li>
          <li className="topList-item" onClick={handleLogout}>
            {user && "Log-out"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="top-img"
            src={PF + user.profilePic}
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topList-item">
              <Link className="Link" to="/login">
                Log-in
              </Link>{" "}
            </li>
            <li className="topList-item">
              <Link className="Link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

<i  className={searchToggled ? "topIcon-srch fa-solid fa-times" : "topIcon-srch fa-solid fa-magnifying-glass"} onClick={toggleSearch}></i>
        <div className={searchToggled ? "togglesearch" : "togglesearch hidden"} style={{ display: searchToggled ? "block" : "none" }}   >
          <input type="text" placeholder="Search here"  />
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </div>
  );
}
