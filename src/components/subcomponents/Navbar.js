import React from "react";
import "../../styles/Navbar.scss";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import AddIcon from "@material-ui/icons/AddBox";
import ProfileIcon from "@material-ui/icons/Portrait";

function Navbar(props) {

  return (
    <div className="Navbar">
      <div onClick={()=>{props.handleClick(1)}}>
        <HomeIcon className="icon" style={{color: props.value===1 ? '#27958B' : '#A79E9E'}}/>
      </div>
      <div onClick={()=>{props.handleClick(2)}}>
        <GroupIcon className="icon" style={{color: props.value===2 ? '#27958B' : '#A79E9E'}}/>
      </div>
      <div onClick={()=>{props.handleClick(3)}}>
        <AddIcon className="icon" style={{color: props.value===3 ? '#27958B' : '#A79E9E'}}/>
      </div>
      <div onClick={()=>{props.handleClick(4)}}>
        <ProfileIcon className="icon" style={{color: props.value===4 ? '#27958B' : '#A79E9E'}}/>
      </div>
    </div>
  );
}

export default Navbar;
