import "./App.css";
import { useEffect, useState } from "react";

// const cardsInfo = [
//   {
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Zjaph4YOs8sDt_p8CsgsE9rohpOLjIrjOQ&usqp=CAU",
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.`,
//   },
//   {
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Zjaph4YOs8sDt_p8CsgsE9rohpOLjIrjOQ&usqp=CAU",
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.`,
//   },
//   {
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Zjaph4YOs8sDt_p8CsgsE9rohpOLjIrjOQ&usqp=CAU",
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.`,
//   },
//   {
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Zjaph4YOs8sDt_p8CsgsE9rohpOLjIrjOQ&usqp=CAU",
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.`,
//   },
// ];

function App({ title }) {
  const [counter, setCounter] = useState();

  useEffect(() => {
    if (!counter) setCounter(JSON.parse(localStorage.getItem("counter")) || 0);
    else localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>MyCounter</h1>

      <h2>{counter}</h2>
      <div>
        {counter > 7 && <h4>Boom</h4>}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
