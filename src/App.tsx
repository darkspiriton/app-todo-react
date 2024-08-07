import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

import "./App.css";

function App() {
  const title = "Learn React";
  return (
    <>
      <div className="App">
        <TodoCounter/>
        <TodoSearch/>

        <TodoList>
          <TodoItem title={"Ejemplo"}/>
          <TodoItem title={title}/>
          <TodoItem title={title}/>
        </TodoList>
        <CreateTodoButton />
      </div>
    </>
  );
}

export default App;
