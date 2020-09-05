import React from 'react';
import "../../styles/Main.scss";
import Todo from './Todo';
import {mytodos} from './../../data/data';

function Main() {
    let randomTodos = mytodos.map((todo)=><Todo title={todo.title} completed={todo.completed} description={todo.description}/>);
    return (
        <div className="Main">
            {randomTodos}
        </div>
    )
}

export default Main
