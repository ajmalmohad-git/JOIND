import React from 'react'
import Avatar from '@material-ui/core/Avatar/Avatar'

function Chats(props) {
    return (
        <div className="chat">
            <Avatar/>
            <p>{props.name}</p>
        </div>
    )
}

export default Chats
