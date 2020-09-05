import React from 'react'
import "../../styles/Groups.scss";
import Chats from './Chats';
import {chatmembers} from '../../data/data'

function Groups() {

    let chats = chatmembers.map((value)=><Chats name={value}/>);
    return (
        <div className="Groups">
            <h2>Chats</h2>
            <div className="chats">
            {chats}
            </div>
        </div>
    )
}

export default Groups

