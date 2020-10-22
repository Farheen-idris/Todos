import React from "react";
import Todoitem from "./TodoItem";


const Todos = (props) => {

  console.log(props.data)
  return (

    <div>
      <p>
        {props.data.map((todo) => (
          <Todoitem
            todo={todo}
            key={todo.id}
            complete={props.complete}
            delete={props.deleted}
          />
        ))
        }
      </p>
    </div>
  );
}
export default Todos