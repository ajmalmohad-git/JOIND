import React from "react";
import "./../styles/Home.scss";
import Leftbar from "./subcomponents/Leftbar";
import Rightbar from "./subcomponents/Rightbar";
import Navbar from "./subcomponents/Navbar";
import Main from "./subcomponents/Main";
import Appbar from "./subcomponents/Appbar";

function Home() {
  return (
    <div className="Home">
      <div className="appbar">
        <Appbar/>
      </div>
      <div className="leftbar">
        <Leftbar />
      </div>
      <div className="rightbar">
        <Rightbar />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
