import React,{useState} from "react";
import "./../styles/Home.scss";
import Leftbar from "./subcomponents/Leftbar";
import Rightbar from "./subcomponents/Rightbar";
import Navbar from "./subcomponents/Navbar";
import Main from "./subcomponents/Main";
import Appbar from "./subcomponents/Appbar";
import Groups from "./subcomponents/Groups";
import Profile from "./subcomponents/Profile";
import AddTodo from "./subcomponents/AddTodo";
import Filler from "./subcomponents/Filler";


function Home() {

  let [page,setPage] = useState(1);

  let handleClick = (num) =>{
    setPage(page=num)
  }

  let renderSwitch = ()=>{
    switch (page) {
      case 1: return <Main />;
      case 2: return <Groups/>;
      case 3: return <AddTodo/>;
      case 4: return <Profile/>;
      default: return <Main />;
    }
  }

  return (
    <div className="Home">
      <div className="appbar">
        <Appbar/>
      </div>
      <div className="leftbar">
        {page!==4 ? <Leftbar /> : <Filler/>}
      </div>
      <div className="rightbar">
        {page!==3 ? <Rightbar />: <Filler/>}
      </div>
      <div className="main">
        {renderSwitch()}
      </div>
      <div className="navbar">
        <Navbar value={page} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Home;
