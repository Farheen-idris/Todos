import React from "react";

export default function todoitem(props) {
  const getStyle = {

    background: "grey",
    borderBottom: "1px black solid",
    padding: "10px",
    textDecoration: props.todo.completed ? "line-through" : "none"
  };

  const btnstyle = {
    float: "right",
    borderRadius: "50%",
    color: "white",
    cursor: "pointer",
    background: "red",
    padding: "5px 9px",
  };

  const { item, id } = props.todo;
  return (
    <div style={getStyle}>
      <p>
        {" "}
        <input
          type="checkbox"
          onChange={props.complete(id)}
        />
        {item}
        <button style={btnstyle} onClick={props.delete(id)}>
          x
       </button>
      </p>
    </div>
  );
}

