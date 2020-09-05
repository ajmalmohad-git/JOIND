import React from 'react'
import "../../styles/Leftbar.scss";
import Avatar from '@material-ui/core/Avatar/Avatar'
import {mytodos} from './../../data/data';

function Leftbar() {

    let todotitles = mytodos.map((todo,i)=>
            <div className="todo" key={i}>
              <input type='checkbox' id={i}></input>
              <p>{todo.title}</p>
            </div>
    )

    return (
        <div className="Leftbar">
            <div className="user">
                <img  className="logo" src={require('./../../images/joind.png')} alt="JOIND" />
                <Avatar className="avatar"/>
                <p>@user_name</p>
            </div>

            <div className="bio">
                <h3>My Bio</h3>
                <p>Lorem ipsum dolor sit amet, consect
                 adipiscing elit, sed do eiusmod tem
                 Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div className="mytodo">
                {todotitles}
            </div>
        </div>
    )
}

export default Leftbar
