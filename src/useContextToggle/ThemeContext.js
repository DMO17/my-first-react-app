import React, { useState } from "react";

export const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme);

  const globalVariables = { darkTheme, toggleTheme };
  return (
    <>
      <ThemeContext.Provider value={globalVariables}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
