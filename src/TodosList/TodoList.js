import React, { useState, useReducer } from "react";
import Todo from "./Todo";

export const ACTION = {
  ADD_TODO: "add-todo",
  ADD_TOGGLE: "toggle-todo",
  DELETE_TODO: "del",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.input)];
    case ACTION.ADD_TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTION.DELETE_TODO:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    default:
  }
};

const newTodo = (input) => {
  return {
    id: Date.now(),
    name: input,
    complete: false,
  };
};

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const updateInput = (event) => setInput(event.target.value);

  const handleSubmission = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { input } });
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input typeof="text" value={input} onChange={updateInput} />
      </form>

      <div className="d-flex flex-wrap">
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}
