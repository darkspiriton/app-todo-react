import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}

function App() {
  // const [count] = useState(0);

  return (
    <>
      {/* Hello Vite + React! {count} */}
      <div className="App">
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>
    </>
  );
}

export default App;
