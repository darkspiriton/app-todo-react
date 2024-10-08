import "./index.css";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
