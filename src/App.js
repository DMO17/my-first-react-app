// import React, { useState } from "react";
// import "./App.css";
// import FunctionContextComponent from "./useContextToggle/FunctionContextComponent";
// import ThemeProvider from "./useContextToggle/ThemeContext";

// function App() {
//   return (
//     <>
//       <ThemeProvider>
//         <FunctionContextComponent />
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

import React, { useState, useReducer } from "react";
import TodoList from "./TodosList/TodoList";

// const ACTIONS = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { count: state.count + 1 };
//     case ACTIONS.DECREMENT:
//       return { count: state.count - 1 };

//     default:
//       return state;
//   }

//   // if (action.type === "increment") {
//   //   return { count: state.count + 1 };
//   // }
//   // if (action.type === "decrement") {
//   //   return { count: state.count - 1 };
//   // }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   const [count, setCount] = useState(0);

//   const increment = () => dispatch({ type: "increment" });
//   const decrement = () => dispatch({ type: "decrement" });
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={decrement}>Decrement </button>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
