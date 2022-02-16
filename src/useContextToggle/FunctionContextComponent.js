import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function FunctionContextComponent() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>FunctionContextComponent</div>;
    </>
  );
}
