import React, { useState, useRef } from "react";
import "../../styles/Rightbar.scss";
import AddIcon from "@material-ui/icons/Add";

function Rightbar() {
  let [todo, setTodo] = useState({
    title: undefined,
    description: undefined,
    completed: false,
  });

  let title = useRef();
  let desc = useRef();

  let addTodo = () => {
    if (todo.title && todo.description) {
      console.log(todo);
      setTodo({
        ...todo,
        title: undefined,
        description: undefined,
      });
      title.current.value = "";
      desc.current.value = "";
    }
  };

  return (
    <div className="Rightbar">
      <textarea
        className="title"
        value={todo.title}
        onChange={(e) => {
          todo.title = e.target.value;
        }}
        ref={title}
        rows={4}
        placeholder="Add todo title..."
      />
      <textarea
        className="desc"
        value={todo.description}
        onChange={(e) => {
          todo.description = e.target.value;
        }}
        ref={desc}
        rows={6}
        placeholder="Add todo description..."
      />
      <button
        className="btn"
        onClick={() => {
          addTodo();
        }}
      >
        <AddIcon className="Icon" />
      </button>
    </div>
  );
}

export default Rightbar;
