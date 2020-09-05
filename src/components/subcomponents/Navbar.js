import React from "react";
import "../../styles/Navbar.scss";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import AddIcon from "@material-ui/icons/AddBox";
import ProfileIcon from "@material-ui/icons/Portrait";

function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <HomeIcon className="icon"/>
      </div>
      <div>
        <GroupIcon className="icon"/>
      </div>
      <div>
        <AddIcon className="icon"/>
      </div>
      <div>
        <ProfileIcon className="icon"/>
      </div>
    </div>
  );
}

export default Navbar;
