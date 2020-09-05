import React from 'react'
import "../../styles/Appbar.scss";

function Appbar() {
    return (
        <div className="Appbar">
            <img className="image" src={require('./../../images/logo.png')} alt="logo"/>
        </div>
    )
}

export default Appbar
