import React from 'react';
import "../../styles/Rightbar.scss";
import AddIcon from '@material-ui/icons/Add'

function Rightbar() {
    return (
        <div className="Rightbar">
            <textarea className="title" rows={4} placeholder="Add todo title..."/>
            <textarea className="desc" rows={6} placeholder="Add todo description..."/>
            <button className="btn"><AddIcon className="Icon"/></button>
        </div>
    )
}

export default Rightbar
