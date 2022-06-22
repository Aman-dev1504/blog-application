import React from "react";
import Home from "./pages/home/home"
import Topbar from "./components/topbar/topbar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Contactus from "./pages/contact/contact";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  const user =true;
  return (
    <Router>
  <Topbar/>
  {/* <Switch>
 <Route path="/" >
 <Home/>
 </Route>


  </Switch> */}
  <Routes>
  <Route exact path="/" element={<Home />} />
  <Route exact path="/contact" element={<Contactus />} />
  <Route exact path="/login" element={user ? <Home/> :<Login />} />
  <Route exact path="/register" element={user ? <Home/> : <Register />} />
  <Route exact path="/write" element={user ?<Write/>:<Register/>} />
  <Route exact path="/settings" element={user ?<Settings/>:<Register/>} />
  <Route exact path="/post/:postId" element={<Single/>} />
  </Routes>
  
    </Router>
      
  );
}

export default App;
