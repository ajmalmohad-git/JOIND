import React from 'react'
import "../../styles/Todo.scss";
import FavIcon from '@material-ui/icons/FavoriteBorderOutlined'
import CommentIcon from '@material-ui/icons/CommentOutlined'
import Avatar from '@material-ui/core/Avatar/Avatar'

function Todo(props) {
    return (
        <div className="Todo">
            <div className="head">
                <input type="checkbox"/>
                <h3>{props.title}</h3>
            </div>

            <p>{props.description}</p>

            <div className="lcu">
                <div>
                    <FavIcon className="icons"/>
                    <CommentIcon className="icons"/>
                </div>
                <div>
                    <Avatar className="avatar"/>
                </div>
            </div>
        </div>
    )
}

export default Todo
