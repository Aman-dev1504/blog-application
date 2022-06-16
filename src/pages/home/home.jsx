import Header from "../../header/header";
import Sidebar from "../../sidebar/sidebar";
import Posts from "../../posts/posts";

import "./home.css"
export default function home() {
  return (
    <>
      <Header/>
      <div className="home">
       <Posts/>
       <Sidebar/>

      </div>
    </>
  )
}
