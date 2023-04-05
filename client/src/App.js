import React, { useState, useContext, useEffect } from "react";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/topbar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Contactus from "./pages/contact/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Context } from "./context/Context";
import { Rings } from "react-loader-spinner";
import About from "./pages/About/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return loading ? 
  <div className="loader">
    
    <Rings
      height="80"
      width="80"
      color="#06283D"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
      
    />
     </div> 
  : 
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route
          exact
          path="/settings"
          element={user ? <Settings /> : <Register />}
        />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  ;
}

export default App;
