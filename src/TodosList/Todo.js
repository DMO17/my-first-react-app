import React from "react";
import { ACTION } from "./TodoList";

export default function Todo({ id, name, complete, dispatch }) {
  const handleToggle = () => {
    dispatch({ type: ACTION.ADD_TOGGLE, payload: { id } });
  };

  const handleDelete = () => {
    dispatch({ type: ACTION.DELETE_TODO, payload: { id } });
  };

  return (
    <div
      className="m-4"
      style={{
        backgroundColor: complete ? "green" : "red",
      }}
    >
      <h1>{name}</h1>
      <h2>{id}</h2>
      <button onClick={handleToggle}>
        {complete ? "Completed" : "Not-Complete"}{" "}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
